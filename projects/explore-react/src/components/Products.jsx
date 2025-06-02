import React from 'react'
import products from '../products.json'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/cartReducer';
const Products = ({ title }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className='my-5 text-2xl uppercase text-gray-600'>{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {products.slice(0, 3).map((p, index) => (

                    <div key={index} className='space-y-5'>
                        <img src={p.image} className='w-full' />
                        <h3 className='font-bold text-2xl'>{p.title}</h3>
                        <p className='text-gray-500'>
                            {p.description}
                        </p>
                        <p>Rs. {Math.ceil(p.price)}</p>
                        <div className="flex gap-3">
                            <button>
                                Buy Now
                            </button>
                            <button onClick={() => dispatch(addItemToCart(p))}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products
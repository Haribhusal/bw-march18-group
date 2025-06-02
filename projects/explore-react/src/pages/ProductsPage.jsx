import React from 'react'
import Products from '../components/Products'

const ProductsPage = () => {
    return (
        <div className='py-10'>
            <div className="container max-w-7xl mx-auto">
                <h3 className='text-3xl'>
                    All Products
                </h3>
                <Products />
            </div>
        </div>
    )
}

export default ProductsPage
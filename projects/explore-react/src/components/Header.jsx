import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';


const Header = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <header className='sticky top-0 bg-white z-10 shadow-md'>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="logo ">
                    <Link to={'/'}>
                        <img src="/logo.webp" className="w-32" alt="" />
                    </Link>
                </div>

                <nav className="space-x-5 flex">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/contact-us">Contact us</Link>

                    <Link to={'/cart'}>
                        <div className='relative'>
                            Cart
                            <span className='absolute -top-5 right-0 bg-red-500 px-2 text-white rounded-t-2xl'>{cartItems.length}</span>
                        </div>
                    </Link>

                </nav>


            </div>
        </header>
    )
}

export default Header
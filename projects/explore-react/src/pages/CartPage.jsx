import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItemFromCart } from './../redux/cartReducer'

import KhaltiCheckout from "khalti-checkout-web";



let config = {
    "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a507256",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess(payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError(error) {
            // handle errors
            console.log(error);
        }
    },
    // one can set the order of payment options and also the payment options based on the order and items in the array
    paymentPreference: [
        "MOBILE_BANKING",
        "KHALTI",
        "EBANKING",
        "CONNECT_IPS",
        "SCT",
    ],
};



const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartTotal = Math.ceil(cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0));
    const shippingCharge = 200;
    const discount = 20;

    const finalAmount = Math.ceil(cartTotal + shippingCharge - (cartTotal * discount / 100));

    let checkout = new KhaltiCheckout(config);

    const handlePayment = () => {
        checkout.show({ amount: finalAmount * 100 });
    }
    return (
        <div className='py-10'>
            <div className="container max-w-7xl mx-auto">
                <h3 className='text-3xl mb-5'>
                    Cart Page
                </h3>
                <div className="flex gap-3">
                    <div className="cartItems w-full md:w-3/4 flex flex-col gap-5">
                        {cartItems.length > 0 ? cartItems.map((item) => (
                            <div className="cartItem border border-gray-400 border-dashed p-3 rounded flex   gap-3">
                                <img className='size-32' src={item.image} alt="" />
                                <div className="info flex flex-col gap-3">
                                    <h2 className='text-2xl font-bold'>{item.title}</h2>
                                    <p>
                                        Rs. {Math.ceil(item.price)} * {item.quantity} = Rs. {Math.ceil(item.price * item.quantity)}
                                    </p>
                                    <div className="buttons flex gap-3">
                                        <button onClick={() => dispatch(increaseQuantity(item))}>Increase quantity</button>
                                        <button onClick={() => dispatch(decreaseQuantity(item))}>Decrease Quantity</button>
                                        <button onClick={() => dispatch(removeItemFromCart(item))}>Remove item</button>
                                    </div>
                                </div>
                            </div>
                        ))
                            :
                            <div>
                                <h3>No Items in the cart</h3>
                            </div>
                        }


                    </div>
                    {cartItems.length > 0 &&
                        <div className="cartsummary bg-gray-900 rounded text-gray-500 w-full md:w-1/4">
                            <div className="card p-5">
                                <h3 className='text-3xl text-white border-b border-gray-700 pb-3'>Cart Summary</h3>
                                <table className='w-full my-5 text-xl'>
                                    <tbody>
                                        <tr>
                                            <td>Total Amount</td>
                                            <td className='text-white'>Rs. {cartTotal}</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Charge</td>
                                            <td className='text-white'>Rs. {shippingCharge}</td>
                                        </tr>
                                        <tr>
                                            <td>Discount</td>
                                            <td className='text-white'>{discount}%</td>
                                        </tr>
                                        <tr>
                                            <td>Today's total</td>
                                            <td className='text-white font-bold'>Rs. {finalAmount}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <button onClick={handlePayment} className='pay_btn mt-5'>Pay Now</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default CartPage
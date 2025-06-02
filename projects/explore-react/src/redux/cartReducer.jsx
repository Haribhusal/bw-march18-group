import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;

            const existing = state.cartItems.find((product) => product.id === item.id)
            if (existing) {
                existing.quantity += 1
            } else {
                state.cartItems.push({ ...item, quantity: 1 });

            }
            console.log(action.payload)
            // state.cartItems = state.cartItems.push({ ...item, quantity: 1 })
        },
        increaseQuantity: (state, action) => {
            const item = action.payload;
            const existing = state.cartItems.find((product) => product.id === item.id)
            existing.quantity += 1
        },
        decreaseQuantity: (state, action) => {
            const item = action.payload;
            const existing = state.cartItems.find((product) => product.id === item.id);
            if (existing) {
                existing.quantity -= 1;
                if (existing.quantity < 1) {
                    state.cartItems = state.cartItems.filter(i => i.id !== existing.id);
                }
            }
        },
        removeItemFromCart: (state, action) => {
            const item = action.payload;
            const existing = state.cartItems.find((product) => product.id === item.id);
            state.cartItems = state.cartItems.filter(i => i.id !== existing.id);
        }
    },
})

export const { addItemToCart, increaseQuantity, decreaseQuantity, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer


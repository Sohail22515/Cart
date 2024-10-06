import { createReducer } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
};

export const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('cart/addToCart', (state, action) => {
            const item = action.payload;
            const isItemExist = state.cartItems.find(i => i.id === item.id);

            if (isItemExist) {
                state.cartItems.forEach(i=>{
                    if(i.id===item.id) i.quantity+=1;
                })
            } else {
                state.cartItems.push({...item,quantity:1});
            }
        })

        .addCase('cart/incrementQuantity', (state, action) => {
            const { id } = action.payload;  // Extract the id from payload
            const item = state.cartItems.find(i => i.id === id);  // Find the item in the cart
        
            if (item) {
                item.quantity += 1;  // Increment quantity of the found item
            }
        })

        .addCase('cart/decrementQuantity', (state, action) => {
            const { id } = action.payload;  // Extract the id from payload
            const item = state.cartItems.find(i => i.id === id);  // Find the item in the cart
        
            if (item) {
                item.quantity -= 1;  // Increment quantity of the found item
            }
            if(item.quantity===0){
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        })

        .addCase('cart/deleteQuatity', (state, action) => {
            const { id } = action.payload;  // Extract the id from payload
            const item = state.cartItems.find(i => i.id === id);  // Find the item in the cart
        
            // Filter out the item with the matching id from the cartItems array
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        })

        
        
});

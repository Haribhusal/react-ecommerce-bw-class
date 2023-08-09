import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cartItemsData: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        updateCart: (state, payload) => {
            state.cartItemsData = [...state.cartItemsData, payload.payload]
        },
        removeCart: (state, payload) => {
            console.log(payload)
            state.cartItemsData = state.cartItemsData.filter((item) => item.id !== payload.payload)
        }
    }

})

export const { addToCart, updateCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
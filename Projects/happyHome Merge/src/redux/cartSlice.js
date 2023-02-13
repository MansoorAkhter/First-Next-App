import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartData: []
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            state.cartData = [...state.cartData, action.payload]
            console.log(state, "<<<===ADD TO CART")
        },
        deleteToCart: (state, action) => {
            const index = state.cartData.findIndex(e => e.id === action.payload.id);
            console.log(state, "<<<===REMOVE FROM CART")
            const newItem = [...state.cartData];
            if (index >= 0) {
                newItem.splice(index, 1)
            }
            state.cartData = newItem;
        },
        updateCart: (state, action) => {

            console.log("UPDATE REDUX DATA")
            // const index = state.cartData.findIndex(e => e.id === action.payload.id);
            // console.log(state, "UPDATE REDUX DATA")
            // const newItem = [...state.cartData];
            // if (index >= 0) {
            //     newItem.splice(index, 1)
            // }
            // state.cartData = newItem;
        },
    }
})

export const { addToCart, deleteToCart, updateCart } = cartSlice.actions;
export const selectCartItem = state => state.cart.cartData;
export const selectCartItemWithID = (state, id) => state.cart.cartData.filter(e => e.id === id);

export default cartSlice.reducer;
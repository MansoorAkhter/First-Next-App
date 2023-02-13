import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistData: []
}

export const wishlist_Slice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlistData = [...state.wishlistData, action.payload]

            console.log(state, "=====addToWishlist=====");
            
        },
        deleteFromWishlist: (state, action) => {
            const index = state.wishlistData.findIndex(e => e.id === action.payload.id);
            const newItem = [...state.wishlistData];

            if (index >= 0) {
                newItem.splice(index, 1)
            }
            state.wishlistData = newItem;

            console.log(state, "====Remove From Wishlist====");
        }
    }
})

export const { addToWishlist, deleteFromWishlist } = wishlist_Slice.actions;
export const selectWishlistItem = state => state.wishlist.wishlistData;
export const selectWishlistItemWithID = (state, id) => state.cart.wishlistData.filter(e => e.id === id);

export default wishlist_Slice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData: null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        userLoginData: (state, action) => {
            state.userData = [...state.userData, action.payload]
            console.log(state, "<<<===USER AVAILABLE DATA")
        }

    }
})

export const { userLoginData } = userSlice.actions;
export const selectUserData = state => state.cart.userData;
// export const selectCartItemWithID = (state, id) => state.cart.userData.filter(e => e.id === id);

export default userSlice.reducer;
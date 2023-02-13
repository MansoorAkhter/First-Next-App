import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
// REDUCERS
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlist_Slice";
import userReducer from "./userSlice";
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
const wishlistPersistedReducer = persistReducer(persistConfig, wishlistReducer);
const userPersistedReducer = persistReducer(persistConfig, userReducer);

export default () => {

    const store = configureStore({
        reducer: { cart: cartPersistedReducer, wishlist:wishlistPersistedReducer,
        user:userPersistedReducer
        },
       devTools: process.env.NODE_ENV !== 'production',
        middleware: [thunk],
    });

    let persistor = persistStore(store);
    return { store, persistor };
};
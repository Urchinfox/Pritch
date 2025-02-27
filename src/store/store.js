import { configureStore } from "@reduxjs/toolkit";
import cartMsgReducer from "../slices/cartMessageSlice";
import toastMsgReducer from '../slices/toastMeassgeSlice';

export const cartStore = configureStore({
    reducer:{
        cartMsg: cartMsgReducer,
        toastMsg:toastMsgReducer,
    }
})
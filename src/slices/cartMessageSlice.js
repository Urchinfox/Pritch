import { createSlice } from "@reduxjs/toolkit";

export const cartMsgSlice = createSlice({
    name:'cartMsgSlice', 
    initialState: [], 
    reducers:{
        cartHint(state,action){
            return action.payload
        }
    }
})



export const {cartHint} = cartMsgSlice.actions;
export default cartMsgSlice.reducer;


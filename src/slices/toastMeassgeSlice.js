import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const toastMsgSlice = createSlice({
    name: 'toastMsgSlice',
    initialState:[],
    reducers:{
        createMsg(state,action){
            state.push({
                id: action.payload.id,
                type:'success',
                title:'success',
                txt:action.payload.message
            })
        },
        removeMsg(state,action){
            return state.filter(item => item.id !== action.payload )
   
        }
    }
})

export const createMsgThunk = createAsyncThunk(
    'createMsgThunk/createAsyncThunk',
    async function(payload,{dispatch,requestId}){
        dispatch(toastMsgSlice.actions.createMsg({
            ...payload,
            id: requestId,
        }))
        setTimeout(() => {
            dispatch(toastMsgSlice.actions.removeMsg(requestId))
        }, 2000);
    }
)
export const {createMsg} = toastMsgSlice.actions;
export default toastMsgSlice.reducer;
import { createContext } from "react"


export const messageContext = createContext({});

export const initState = {
    type: '',
    title: '',
    txt: ''
}
export const messageReducer = (state, action) => {
    switch (action.type) {
        case 'POST_MESSAGE':
            return {
                ...action.payload
            }
        case 'CLEAR_MESSAGE':
            return initState;

        default:
            return initState;
    }
}


export function handleSuccessMessage(dispatch) {
    dispatch({
        type: 'POST_MESSAGE',
        payload: {
            type: 'gray',
            title: 'Success',
            txt: '更新成功'
        }
    })

    setTimeout(() => {
        dispatch({
            type: 'CLEAR_MESSAGE',
        })
    }, 3000);

}

export function handleErrorMessage(dispatch, error) {
    dispatch({
        type: 'POST_MESSAGE',
        payload: {
            type: 'danger',
            title: 'Fail',
            txt: Array.isArray(error?.response?.data?.message) ? error?.response?.data?.message.join(',') : error?.response?.data?.message
        }
    })

    setTimeout(() => {
        dispatch({
            type: 'CLEAR_MESSAGE',
        })
    }, 3000);
}
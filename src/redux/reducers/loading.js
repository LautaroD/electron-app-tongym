import { LOADING_FALSE, LOADING_TRUE } from '../actions'

const initialStore = {
    isLoading: false
}

export const loadingReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case LOADING_FALSE:
            return {
                ...state,
                isLoading: payload
            }
        case LOADING_TRUE:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
}
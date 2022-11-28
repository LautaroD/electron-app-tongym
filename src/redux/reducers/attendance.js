import { GET_LIST_CLIENTS } from '../actions';

const initialStore = {
    listClients: [],
    copyListClients: []
}

export const attendanceReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case GET_LIST_CLIENTS:
            return {
                ...state,
                listClients: payload,
                copyListClients: payload
            }
        default:
            return state
    }
}
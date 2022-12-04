import { GET_LIST_CLIENTS, GET_TOT_RECAUDO } from '../actions';

const initialStore = {
    listClients: [],
    copyListClients: [],
    totRecaudo: []
}

export const attendanceReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case GET_LIST_CLIENTS:
            return {
                ...state,
                listClients: payload,
                copyListClients: payload
            }
        case GET_TOT_RECAUDO:
            return {
                ...state,
                totRecaudo: payload
            }
        default:
            return state
    }
}
import { GET_ALL_CLIENTS, SEARCH_CLIENTS, RESET_CLIENTS, EDIT_CLIENT, GET_ONE_CLIENT, SEARCH_DISCIPLINA } from '../actions';

const initialStore = {
    clients: [],
    clientsCopy: [],
    clientToEdit: [],
    client: null
}

export const clientsReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case GET_ALL_CLIENTS:
            return {
                ...state,
                clients: payload,
                clientsCopy: payload
            }
        case SEARCH_CLIENTS:
            return {
                ...state,
                clients: state.clientsCopy.filter(client => (client.name).toLowerCase().includes(((payload.search).toLowerCase())) || (client.lastName).toLowerCase().includes(((payload.search).toLowerCase())))
            }
        case SEARCH_DISCIPLINA:
            return {
                ...state,
                clients: state.clientsCopy.filter(client => (client.disciplina).toLowerCase() === (payload).toLowerCase())
            }
        case RESET_CLIENTS:
            return {
                ...state,
                clients: state.clientsCopy
            }
        case EDIT_CLIENT:
            return {
                ...state,
                clientToEdit: state.clients.filter(client => client.name === payload.name)
            }
        case GET_ONE_CLIENT:
            return {
                ...state,
                client: payload
            }
        default:
            return state;
    }
}
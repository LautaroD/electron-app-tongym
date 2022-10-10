import { Client } from '../../../api';

export const EDIT_CLIENT = 'EDIT_CLIENT';
export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';
export const SEARCH_CLIENTS = 'SEARCH_CLIENTS';
export const RESET_CLIENTS = 'RESET_CLIENTS';
export const GET_ONE_CLIENT = 'GET_ONE_CLIENT';
export const SEARCH_DISCIPLINA = 'SEARCH_DISCIPLINA';

export const editClient = (data) => {
    return function (dispatch) {
        return dispatch({ type: EDIT_CLIENT, payload: data })
    }
}

const clientController = new Client();

export const getAllClients = () => {
    return async function (dispatch) {
        let result = await clientController.getAllClients();
        if (result.length > 1) result = result.sort((a, b) => a.name.localeCompare(b.name))
        return dispatch({ type: GET_ALL_CLIENTS, payload: result })
    }
}

export const getClient = (clientKey) => {
    return async function (dispatch) {
        let result = await clientController.getOneClient(clientKey);
        return dispatch({ type: GET_ONE_CLIENT, payload: result })
    }
}

export const resetClients = () => {
    return function (dispatch) {
        return dispatch({ type: RESET_CLIENTS, payload: null })
    }
}

export const searchClient = (data) => {
    return function (dispatch) {
        if (data.search.length > 1) return dispatch({ type: SEARCH_CLIENTS, payload: data })
        else if (data.disciplina.length > 1) return dispatch({ type: SEARCH_DISCIPLINA, payload: data.disciplina })
    }
}

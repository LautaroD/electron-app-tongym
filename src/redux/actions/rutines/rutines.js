import { Rutines } from '../../../api';

export const GET_ALL_RUTINES = 'GET_ALL_RUTINES';
export const RESET_RUTINES = 'RESET_RUTINES';
export const SEARCH_RUTINES = 'SEARCH_RUTINES';
export const FILTER_RUTINES = 'FILTER_RUTINES';
export const EDIT_RUTINE = 'EDIT_RUTINE';

const controllerRutines = new Rutines();

export const getAllRutines = () => {
    return async function (dispatch) {
        let result = await controllerRutines.getAllRutines();
        return dispatch({ type: GET_ALL_RUTINES, payload: result })
    }
}

export const resetRutines = () => {
    return function (dispatch) {
        return dispatch({ type: RESET_RUTINES, payload: null })
    }
}

export const searchRutine = (data) => {
    return async function (dispatch) {
        let result = await controllerRutines.filterRutines(data)
        return dispatch({ type: SEARCH_RUTINES, payload: result })
    }
}

export const filterRutines = (data) => {
    return function (dispatch) {
        return dispatch({ type: FILTER_RUTINES, payload: data })
    }
}

export const editRutine = (rutina) => {
    return function (dispatch) {
        return dispatch({ type: EDIT_RUTINE, payload: rutina })
    }
}
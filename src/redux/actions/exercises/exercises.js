import { Exercises } from '../../../api';

export const EDIT_EXERCISE = 'EDIT_EXERCISE';
export const GET_ALL_EXERCISES = 'GET_ALL_EXERCISES';
export const SEARCH_EXERCISES_STRING = 'SEARCH_EXERCISES_STRING';
export const SEARCH_EXERCISES_DIFICULTAD = 'SEARCH_EXERCISES_DIFICULTAD';
export const SEARCH_EXERCISES_CATEGORIA = 'SEARCH_EXERCISES_CATEGORIA';

export const editExercise = (data) => {
    return function (dispatch) {
        return dispatch({ type: EDIT_EXERCISE, payload: data })
    }
}

const controllerExercises = new Exercises();

export const getAllExercises = () => {
    return async function (dispatch) {
        let result = await controllerExercises.getAllExercises();
        if (result.length > 1) result = result.sort((a, b) => a.text.localeCompare(b.text))
        return dispatch({ type: GET_ALL_EXERCISES, payload: result })
    }
}

export const searchExercises = (data) => {
    return async function (dispatch) {
        if (data.search.length > 1) return dispatch({ type: SEARCH_EXERCISES_STRING, payload: data })
        else if (data.dificultad.length > 1) return dispatch({ type: SEARCH_EXERCISES_DIFICULTAD, payload: { dificultad: data.dificultad } })
        else return dispatch({ type: SEARCH_EXERCISES_CATEGORIA, payload: { categoria: data.categoria } })
    }
}
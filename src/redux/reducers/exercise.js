import { GET_ALL_EXERCISES, EDIT_EXERCISE, SEARCH_EXERCISES_STRING, SEARCH_EXERCISES_DIFICULTAD, SEARCH_EXERCISES_CATEGORIA } from '../actions';

const initialStore = {
    exercises: [],
    exercisesCopy: [],
    exerciseToEdit: []
}

export const exercisesReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case GET_ALL_EXERCISES:
            return {
                ...state,
                exercises: payload,
                exercisesCopy: payload
            }
        case EDIT_EXERCISE:
            return {
                ...state,
                exerciseToEdit: payload
            }
        case SEARCH_EXERCISES_STRING:
            return {
                ...state,
                exercises: state.exercisesCopy.filter(exercise => (exercise.text).toLowerCase().includes((payload.search).toLowerCase()))
            }
        case SEARCH_EXERCISES_DIFICULTAD:
            return {
                ...state,
                exercises: state.exercisesCopy.filter(exercise => (exercise.difficulty).toLowerCase() === (payload.dificultad).toLowerCase())
            }
        case SEARCH_EXERCISES_CATEGORIA:
            return {
                ...state,
                exercises: state.exercisesCopy.filter(exercise => (exercise.categories).includes(payload.categoria))
            }
        default:
            return state;
    }
}
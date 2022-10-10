import { GET_ALL_RUTINES, SEARCH_RUTINES, RESET_RUTINES, EDIT_RUTINE } from '../actions'

const initialStore = {
    rutines: [],
    copyRutines: [],
    rutineToEdit: []
}

export const rutinesReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case GET_ALL_RUTINES:
            return {
                ...state,
                rutines: payload,
                copyRutines: payload
            }
        case SEARCH_RUTINES:
            return {
                ...state,
                rutines: payload
                // rutines: state.copyRutines.filter(rutine => (rutine.dataRutine.name).toLowerCase().includes(payload.toLowerCase()))
            }
        case RESET_RUTINES:
            return {
                ...state,
                rutines: state.copyRutines
            }
        case EDIT_RUTINE:
            return {
                ...state,
                rutineToEdit: payload
            }
        default:
            return state;
    }
}
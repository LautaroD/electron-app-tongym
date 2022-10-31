import { GET_ALL_MEDICAL_FORMS, ADD_CLIENT_MEDICAL_FORMS } from '../actions';

const initialStore = {
    allMedicalForms: []
}

export const medicalFormsReducer = (state = initialStore, { type, payload }) => {
    switch (type) {
        case GET_ALL_MEDICAL_FORMS:
            return {
                ...state,
                allMedicalForms: payload
            }
        case ADD_CLIENT_MEDICAL_FORMS:
            return {
                ...state,
                allMedicalForms: payload
            }

        default:
            return state
    }
}
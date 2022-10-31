import { MedicalForms } from '../../../api';

const controllerMF = new MedicalForms();

export const GET_ALL_MEDICAL_FORMS = 'GET_ALL_MEDICAL_FORMS';
export const ADD_CLIENT_MEDICAL_FORMS = 'ADD_CLIENT_MEDICAL_FORMS';

export const getAllMedicalForms = () => {
    return async function (dispatch) {
        let result = await controllerMF.getMedicalForms();
        return dispatch({ type: GET_ALL_MEDICAL_FORMS, payload: result })
    }
}

export const addClientMedicalForm = (clientKey) => {
    return async function (dispatch) {
        await controllerMF.addClient(clientKey);
        let result = await controllerMF.getMedicalForms();
        return dispatch({ type: ADD_CLIENT_MEDICAL_FORMS, payload: result })
    }
}
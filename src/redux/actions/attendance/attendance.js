import { Attedance, Estadisticas } from '../../../api';

const attendanceController = new Attedance();
const statisticsController = new Estadisticas();

export const GET_LIST_CLIENTS = 'GET_LIST_CLIENTS';
export const GET_TOT_RECAUDO = 'GET_TOT_RECAUDO';

export const getListAttendance = () => {
    return async function (dispatch) {
        let result = await attendanceController.getAttendance();
        return dispatch({ type: GET_LIST_CLIENTS, payload: result })
    }
}

export const getRecaudo = () => {
    return async function (dispatch) {
        let result = await statisticsController.getRecaudo();
        return dispatch({ type: GET_TOT_RECAUDO, payload: result })
    }
}
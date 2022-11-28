import { Attedance } from '../../../api';

const attendanceController = new Attedance();

export const GET_LIST_CLIENTS = 'GET_LIST_CLIENTS';

export const getListAttendance = () => {
    return async function (dispatch) {
        let result = await attendanceController.getAttendance();
        return dispatch({ type: GET_LIST_CLIENTS, payload: result })
    }
}
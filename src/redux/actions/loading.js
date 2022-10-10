export const LOADING_FALSE = 'LOADING_FALSE';
export const LOADING_TRUE = 'LOADING_TRUE';

export const setLoadingTrue = () => {
    return function (dispatch) {
        return dispatch({ type: LOADING_TRUE, payload: true })
    }
}

export const setLoadingFalse = () => {
    return function (dispatch) {
        return dispatch({ type: LOADING_FALSE, payload: false })
    }
}
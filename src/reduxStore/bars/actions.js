import * as actionTypes from './actionTypes';
import { barApi } from '../../service/api/bar';

export const getBars = () => async dispatch => {
    dispatch({ type: actionTypes.GET_ALL_BARS });

    try {
        const bars = await barApi.getBars();
        dispatch({ type: actionTypes.GET_ALL_BARS_SUCCESS, payload: bars });
    } catch(e) {
        dispatch({ type: actionTypes.GET_ALL_BARS_ERROR, payload: e });
    }
}
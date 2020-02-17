import * as actionTypes from './actionTypes';

const initialState = {
    allBars: [],
    isBarListLoading: false,
    barListLoadingError: {},
}

export function barsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_BARS:
            return {
                ...state,
                isBarListLoading: true,
            };
        case actionTypes.GET_ALL_BARS_SUCCESS:
            return {
                ...state,
                allBars: action.payload,
                isBarListLoading: false,
            };
        case actionTypes.GET_ALL_BARS_ERROR:
            return {
                ...state,
                isBarListLoading: false,    
                barListLoadingError: action.payload,
            }
        default:
            return state;
    }
}

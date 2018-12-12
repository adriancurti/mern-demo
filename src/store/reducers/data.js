import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    selected: null,
    error: null,
    loading: false
};

const dataClean = (state, action) => {
    return updateObject(state, initialState);
};

const dataStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const dataFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const dataGetSuccess = (state, action) => {
    return updateObject(state, {
        selected: action.selected,
        loading: false
    });
};

const dataResetError = (state, action) => {
    return updateObject(state, {
        error: null
    });
};

const reducer = (state = initialState, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actionTypes.DATA_CLEAN: return dataClean(state, action);
        case actionTypes.DATA_START: return dataStart(state, action);
        case actionTypes.DATA_FAIL: return dataFail(state, action);
        case actionTypes.DATA_GET_SUCCESS: return dataGetSuccess(state, action);
        case actionTypes.DATA_RESET_ERROR: return dataResetError(state, action);
        default: return state;
    }
};

export default reducer;
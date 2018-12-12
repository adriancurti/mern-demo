import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    serverVersion: '0.0.0',
    appVersion: '0.0.0',
    appEnv: null,
    debugMode: null,
    serverURL: null,
    idleTime: null
};

const envLoad = (state, action) => {
    return updateObject(state, action.environment);
};

const envSetServerVersion = (state, action) => {
    return updateObject(state, {
        serverVersion: action.serverVersion
    });
};

const reducer = (state = initialState, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actionTypes.ENV_LOAD: return envLoad(state, action);
        case actionTypes.ENV_SET_SERVER_VERSION: return envSetServerVersion(state, action);
        default: return state;
    }
};

export default reducer;
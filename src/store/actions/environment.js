import axios from 'axios';

import * as actionTypes from './actionTypes';

export const envGetServerVersion = serverURL => {
    return dispatch => {
        let url = serverURL;
        axios.get(url)
            .then(response => {
                dispatch(envSetServerVersion(response.data.version));
            })
            .catch(error => {
                dispatch(envSetServerVersion('0.0.0'));
            });
    };
};

export const envLoad = environment => {
    return {
        type: actionTypes.ENV_LOAD,
        environment: environment
    };
};

export const envSetServerVersion = serverVersion => {
    return {
        type: actionTypes.ENV_SET_SERVER_VERSION,
        serverVersion: serverVersion
    };
};
import axios from 'axios';

import * as actionTypes from './actionTypes';
import dataJson from '../../shared/data.json';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const dataGet = (id, serverURL) => {
    return dispatch => {
        dispatch(dataStart());

        let url = serverURL + '/data/' + id;
        axios.get(url)
            .then(response => {
                dispatch(dataGetSuccess(response.data.result));
            })
            .catch(error => {
                if (!error.response) {
                    dispatch(dataGetSuccess(dataJson));
                    // dispatch(dataFail({ message: 'Could not connect to the server!' }));
                    return;
                }
                dispatch(dataFail({ message: 'The data has not been obtained!' }));
            });
    };
};

export const dataClean = () => {
    return {
        type: actionTypes.DATA_CLEAN
    };
};

export const dataStart = () => {
    return {
        type: actionTypes.DATA_START
    };
};

export const dataFail = error => {
    return {
        type: actionTypes.DATA_FAIL,
        error: error
    };
};

export const dataGetSuccess = selected => {
    return {
        type: actionTypes.DATA_GET_SUCCESS,
        selected: selected
    };
};

export const dataResetError = () => {
    return {
        type: actionTypes.DATA_RESET_ERROR
    };
};
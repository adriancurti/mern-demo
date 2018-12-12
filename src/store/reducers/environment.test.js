import reducer from './environment';
import * as actionTypes from '../actions/actionTypes';

describe('environment reducer', () => {
    it('initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            serverVersion: '0.0.0',
            appVersion: '0.0.0',
            appEnv: null,
            debugMode: null,
            serverURL: null,
            idleTime: null
        });
    });

    it('action: ENV_LOAD', () => {
        let environment = {
            appVersion: '1.0.0',
            appEnv: 'dev',
            debugMode: true,
            serverURL: 'http://host:port',
            idleTime: 10000
        };

        expect(reducer(
            {
                serverVersion: '0.0.0',
                appVersion: '0.0.0',
                appEnv: null,
                debugMode: null,
                serverURL: null,
                idleTime: null
            }, {
                type: actionTypes.ENV_LOAD,
                environment
            })).toEqual({
                serverVersion: '0.0.0',
                appVersion: '1.0.0',
                appEnv: 'dev',
                debugMode: true,
                serverURL: 'http://host:port',
                idleTime: 10000
            });
    });

    it('action: ENV_SET_SERVER_VERSION', () => {
        expect(reducer(
            {
                serverVersion: '0.0.0',
                appVersion: '1.0.0',
                appEnv: 'dev',
                debugMode: true,
                serverURL: 'http://host:port',
                idleTime: 10000
            }, {
                type: actionTypes.ENV_SET_SERVER_VERSION,
                serverVersion: '1.0.0'
            })).toEqual({
                serverVersion: '1.0.0',
                appVersion: '1.0.0',
                appEnv: 'dev',
                debugMode: true,
                serverURL: 'http://host:port',
                idleTime: 10000
            });
    });
});
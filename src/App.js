import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import IdleTimer from 'react-idle-timer';

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from './App.module.css';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';

import * as actions from './store/actions/index';

const asyncBilling = asyncComponent(() => {
    return import('./containers/Billing/Billing')
});

class App extends Component {
    constructor(props) {
        super(props);
        this.idleTimer = null;
    }

    componentDidMount() {
        const environment = {
            appVersion: '1.0.0',
            appEnv: process.env.REACT_APP_ENV,
            debugMode: process.env.REACT_APP_DEBUG_MODE === 'true',
            serverURL: process.env.REACT_APP_API_URL,
            idleTime: parseInt(process.env.REACT_APP_IDLE_TIME, 10)
        }
        this.props.onEnvLoad(environment);
        this.props.onEnvGetServerVersion(process.env.REACT_APP_API_URL);
    }

    onActive = event => {
        
    }

    onIdle = event => {
        
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/mern-demo" exact component={asyncBilling} />
                <Redirect to="/mern-demo" />
            </Switch>
        );

        return (
            <IdleTimer
                ref={ref => { this.idleTimer = ref }}
                element={document}
                onActive={this.onActive}
                onIdle={this.onIdle}
                timeout={parseInt(process.env.REACT_APP_IDLE_TIME, 10)}>
                <div className={classes.App}>
                    <ToastContainer
                        transition={Flip}
                        newestOnTop={false}
                        rtl={false}
                        pauseOnVisibilityChange={false} />
                    <Layout>
                        {routes}
                    </Layout>
                </div>
            </IdleTimer>
        );
    }
}

const mapStateToProps = state => {
    return {
        serverURL: state.env.serverURL,
        isAuthenticated: true
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnvLoad: environment => dispatch(actions.envLoad(environment)),
        onEnvGetServerVersion: serverURL => dispatch(actions.envGetServerVersion(serverURL))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
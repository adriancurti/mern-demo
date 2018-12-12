import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import classes from './Billing.module.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Invoice from '../Invoice/Invoice';
import Notification, { toastOptions, spinnerOptions } from '../../components/UI/Notification/Notification';
import Overview from '../Overview/Overview';
import Process from '../Process/Process';

import * as actions from '../../store/actions/index';

class Billing extends Component {
    state = {
        invoiceNumber: 'S03834754'
    }

    componentDidMount() {
        let id = this.state.invoiceNumber;
        this.props.onDataGet(id, this.props.serverURL);
    }

    componentDidUpdate() {
        if (this.props.error) {
            this.props.onDataResetError();
        }
    }

    componentWillUnmount() {
        toast.dismiss();
        this.props.onDataClean();
    }

    render() {
        let authRedirect = null;
        if (!this.props.isAuthenticated) {
            authRedirect = <Redirect to={'/auth'} />;
            toast.dismiss();
            toast.info(<Notification toastType="info" title="Info" message="You have not identified!" />, toastOptions);
        }

        if (this.props.loading) {
            toast.dismiss();
            toast(<Notification title="Loading" message="Please wait..." />, spinnerOptions);
        }

        if (this.props.selected) {
            toast.dismiss();
            toast.success(<Notification toastType="success" title="Success" message={'The data has been obtained!'} />, toastOptions);
        }

        if (this.props.error) {
            toast.dismiss();
            toast.error(<Notification toastType="error" title="Error" message={this.props.error.message} />, toastOptions);
        }

        return (
            <Fragment>
                {authRedirect}
                <div className={classes.Billing}>
                    <Backdrop show={this.props.loading} clicked={() => { }} />
                    {this.props.selected ? <Invoice></Invoice> : null}
                    {this.props.selected ? <Process></Process> : null}
                    {this.props.selected ? <Overview></Overview> : null}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        serverURL: state.env.serverURL,
        isAuthenticated: true,
        selected: state.data.selected,
        error: state.data.error,
        loading: state.data.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDatasClean: () => dispatch(actions.dataClean()),
        onDataGet: (id, serverURL) => dispatch(actions.dataGet(id, serverURL)),
        onDataResetError: () => dispatch(actions.dataResetError())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
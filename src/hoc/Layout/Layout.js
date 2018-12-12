import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Notification, { toastOptions } from '../../components/UI/Notification/Notification';

class Layout extends Component {
    state = {
        appName: 'MERN Demo!',
        isOpen: false,
        dropdownOpen: false,
        link: 'Billing',
        action: ''
    }

    onCollapseToggleHandler = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onDropdownToggleHandler = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    onLinkClickHandler = link => {
        this.setState({ link: link });
        toast.dismiss();
        switch (link) {
            case 'Help':
                toast.info(<Notification toastType="info" title="Info" message={`Need help? Contact me!`} />, toastOptions);
                break;
            case 'Search':
                toast.success(<Notification toastType="success" title="Success" message={`The search has results!!`} />, toastOptions);
                break;
            case 'Notifications':
                toast.info(<Notification toastType="info" title="Info" message={`You have 2 notifications!`} />, toastOptions);
                break;
            default:
        }
    }

    onActionClickHandler = action => {
        this.setState({ action: action });
        toast.dismiss();
        switch (action) {
            case 'Action 1':
                toast.success(<Notification toastType="success" title="Success" message={`You clicked on ${action}!`} />, toastOptions);
                break;
            case 'Action 2':
                toast.warning(<Notification toastType="warning" title="Warning" message={`You clicked on ${action}!`} />, toastOptions);
                break;
            case 'Action 3':
                toast.error(<Notification toastType="error" title="Error" message={`Oops! An error occurred in ${action}!`} />, toastOptions);
                break;
            default:
        }
    }

    render() {
        return (
            <Fragment>
                <div className={classes.Background}></div>
                <Toolbar
                    isAuthenticated={this.props.isAuthenticated}
                    appName={this.state.appName}
                    isOpen={this.state.isOpen}
                    dropdownOpen={this.state.dropdownOpen}
                    onCollapseToggle={this.onCollapseToggleHandler}
                    onDropdownToggle={this.onDropdownToggleHandler}
                    onLinkClick={this.onLinkClickHandler}
                    onActionClick={this.onActionClickHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        appVersion: state.env.appVersion,
        isAuthenticated: true
    };
};

export default connect(mapStateToProps)(Layout);
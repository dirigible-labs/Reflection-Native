'use strict';

const React = require('react-native');

const SideMenu = require('react-native-side-menu');
var { FBSDKAccessToken } = require('react-native-fbsdkcore');


const DataScreenContainer = require('./DataScreenContainer');

const LoginScreen = require('../screen/LoginScreen');
const RecordScreen = require('../screen/RecordScreen');
const LoadingScreen = require('../screen/LoadingScreen');
const SideMenuScreen = require('../screen/SideMenuScreen')


const Reflection = React.createClass({

    getInitialState() {
        return {
            current_route: 'primary',
            user_logged_in: false,
            user_loaded: false,
            user_access_token: null,
        };
    },

    getCurrentAccessToken() {
        FBSDKAccessToken.getCurrentAccessToken((token) => {
            let tokenString = token ? token.tokenString : null;
            this.setState({
                user_logged_in: Boolean(tokenString),
                user_loaded: true,
                user_token_string: tokenString,
            });
        });
    },

    updateRoute(route) {
        console.log('Updating route: ', route);
        this.setState({ current_route: route });
    },

    renderCurrentRoute() {
        if (!this.state.user_loaded)
            return <LoadingScreen />;

        if (!this.state.user_logged_in)
            return <LoginScreen onLoginFinished={this.getCurrentAccessToken} />;

        return this.state.current_route === 'data' ?
            <DataScreenContainer /> :
            <RecordScreen />
    },

    componentWillMount() {
        this.getCurrentAccessToken();
    },

    renderSideMenu() {
        return (
            <SideMenuScreen
                updateRoute={this.updateRoute}
                onLogoutFinished={this.getCurrentAccessToken}
            />
        );
    },

    render() {

        return (
            <SideMenu menu={this.renderSideMenu()}>
                { this.renderCurrentRoute() }
            </SideMenu>
        );
    }
});

module.exports = Reflection;
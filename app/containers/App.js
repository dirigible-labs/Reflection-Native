'use strict';

const React = require('react-native');
const {
    // NavigatorIOS,
    StyleSheet,
    View,
} = React;

const Login = require('../components/Login');
const Primary = require('../components/Primary');
const Loading = require('../components/Loading');
const DataScreenContainer = require('./DataScreenContainer');

var { FBSDKAccessToken } = require('react-native-fbsdkcore');

const styles = StyleSheet.create({
    navWrap: {
        flex: 1
    }
});

const Reflection = React.createClass({

    getInitialState() {
        return {
            current_route: 'data',
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

    renderCurrentRoute() {
        if (!this.state.user_loaded)
            return <Loading />;

        if (!this.state.user_logged_in)
            return <Login onLoginFinished={this.getCurrentAccessToken} />;

        return this.state.current_route === 'data' ?
            <DataScreenContainer /> :
            <Primary onLogoutFinished={this.getCurrentAccessToken} />
    },

    componentWillMount() {
        this.getCurrentAccessToken();
    },

    render() {
        return (
            <View style={styles.navWrap}>
            { this.renderCurrentRoute() }
            </View>
        );
    }
});

module.exports = Reflection;
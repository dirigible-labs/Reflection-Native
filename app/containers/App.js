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


var { FBSDKAccessToken } = require('react-native-fbsdkcore');
console.log();

const styles = StyleSheet.create({
    navWrap: {
        flex: 1
    }
});

// const ROUTES = {
//     primary: { component: Primary, title: 'Record' },
//     login: { component: Login,   title: 'Login' },
// }


const Reflection = React.createClass({

    getInitialState() {
        return {
            user_logged_in: false,
            user_loaded_date: false,
            user_access_token: null,
        };
    },

    getCurrentAccessToken() {
        FBSDKAccessToken.getCurrentAccessToken((token) => {
            let tokenString = token ? token.tokenString : null;
            this.setState({
                user_logged_in: Boolean(tokenString),
                user_loaded_date: new Date(),
                user_token_string: tokenString,
            });
        });
    },

    componentWillMount() {
        this.getCurrentAccessToken();
    },

    render() {
        return (
            <View style={styles.navWrap}>
            { this.state.user_loaded ?
                <Loading /> : this.state.user_logged_in ?
                <Primary onLogoutFinished={this.getCurrentAccessToken} /> :
                <Login onLoginFinished={this.getCurrentAccessToken} />
            }
            </View>
        );
    }
});

module.exports = Reflection;
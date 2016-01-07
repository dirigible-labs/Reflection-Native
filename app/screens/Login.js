/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const routes = require('../routes');

const AwesomeButton = require('react-native-awesome-button');
const React = require('react-native');
const layout = require('../layout');

const {
    StyleSheet,
    TextInput,
    View,
} = React;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    loginButtonBackground: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        margin: 20,
    },
    loginButtonLabel: {
        color: 'white'
    }
});


var FBSDKLogin = require('react-native-fbsdklogin');
var {
  FBSDKLoginButton,
} = FBSDKLogin;

const LoginScreen = React.createClass({

    propTypes: {
        navigator: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <View>
                <FBSDKLoginButton
                    onLoginFinished={(error, result) => {
                        if (error) {
                            alert('Error logging in.');
                        } else {
                            if (result.isCancelled) {
                                alert('Login cancelled.');
                            } else {
                                alert('Logged in.');
                            }
                        }
                    }}
                    onLogoutFinished={() => alert('Logged out.')}
                    readPermissions={[]}
                    publishPermissions={['publish_actions']}
                />
            </View>
        );
    }
});

module.exports = LoginScreen;

'use strict';

const React = require('react-native');

const {
    View,
} = React;

var {
  FBSDKLoginButton,
} = require('react-native-fbsdklogin');


const Login = React.createClass({
    // Component used only for logging in
    propTypes: {
        onLoginFinished: React.PropTypes.func.isRequired,
    },

    render() {
        return (
            <View>
                <FBSDKLoginButton
                    onLogoutFinished={() => {}}
                    onLoginFinished={this.props.onLoginFinished}
                    readPermissions={[]}
                    publishPermissions={[]}
                />
            </View>
        );
    }
});

module.exports = Login;

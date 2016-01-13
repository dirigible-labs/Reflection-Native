'use strict';

const React = require('react-native');

const {
    View,
    StyleSheet,
} = React;

var {
  FBSDKLoginButton,
} = require('react-native-fbsdklogin');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
});

const LoginScreen = React.createClass({
    // Component used only for logging in
    propTypes: {
        onLoginFinished: React.PropTypes.func.isRequired,
    },

    render() {
        return (
            <View style={styles.container}>
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

module.exports = LoginScreen;

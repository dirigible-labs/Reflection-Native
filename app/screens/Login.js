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
    Navigator,
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

const LoginScreen = React.createClass({

    propTypes: {
        navigator: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            username: 'hello',
            buttonState: 'idle',
        }
    },

    logIn: function () {
        this.setState({ buttonState: 'busy' })
        setTimeout(() => {
            this.props.navigator.push(routes.primary());
        }, 2000);
    },

    render: function() {
        return (
            <View style={layout.container}>
                <View style={layout.quarterHeight}>
                    <TextInput
                        style={styles.welcome}
                        keyboardType="email-address"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                </View>
                <View style={layout.quarterHeight}>
                    <AwesomeButton
                        backgroundStyle={styles.loginButtonBackground}
                        labelStyle={styles.loginButtonLabel}
                        transitionDuration={200}
                        states={{
                          idle: {
                            text: 'Log In',
                            onPress: this.logIn,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            // text: 'Logging In',
                            backgroundColor: '#002299',
                            spinner: true,
                          },
                          success: {
                            text: 'Logged In',
                            backgroundColor: '#339944'
                          }
                        }}
                        buttonState={this.state.buttonState}
                    />
                </View>
            </View>
        );
    }
});

module.exports = LoginScreen;

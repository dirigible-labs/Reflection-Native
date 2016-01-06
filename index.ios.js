/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const AwesomeButton = require('react-native-awesome-button');
const React = require('react-native');
const {
    AppRegistry,
    AsyncStorage,
    StyleSheet,
    Text,
    TextInput,
    View,
} = React;


const STORAGE_KEY = '@Reflection:primary_storage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flex: 1,
        backgroundColor: '#efefef',
    },
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

const Reflection = React.createClass({

    getInitialState: function () {
        let state = AsyncStorage.getItem(STORAGE_KEY)
        return {
            username: 'hello',
            buttonState: 'idle',
        }
    },

    logIn: function () {
        this.setState({ buttonState: 'busy' })
        setTimeout(() => {
          this.setState({ buttonState: 'success' })
        }, 2000);
    },

    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.quarterHeight}>
                    <TextInput
                        style={styles.welcome}

                        keyboardType="email-address"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />

                </View>
                <View style={styles.quarterHeight}>
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

AppRegistry.registerComponent('Reflection', () => Reflection);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


const React = require('react-native');
const {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
} = React;

const LoginScreen = require('./app/screens/login');

// const STORAGE_KEY = '@Reflection:primary_storage';


const styles = StyleSheet.create({
    navWrap: {
        flex: 1
    }
});

const Reflection = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.navWrap}
                navigationBarHidden={true}
                initialRoute={{
                    component: LoginScreen,
                    title: 'Login',
                    passProps: { myProp: 'foo' },
                }}
            />
        );
    }
});

AppRegistry.registerComponent('Reflection', () => Reflection);

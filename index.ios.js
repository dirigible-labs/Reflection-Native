/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


const React = require('react-native');
const {
    AppRegistry,
} = React;

const LoginScreen = require('./app/screens/login');

// const STORAGE_KEY = '@Reflection:primary_storage';

const Reflection = React.createClass({
    render: function() {
        return (
            <LoginScreen />
        );
    }
});

AppRegistry.registerComponent('Reflection', () => Reflection);

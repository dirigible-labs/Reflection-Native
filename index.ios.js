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

const routes = require('./app/routes');

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
                initialRoute={routes.login()}
            />
        );
    }
});

AppRegistry.registerComponent('Reflection', () => Reflection);

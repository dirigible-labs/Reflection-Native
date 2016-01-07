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

    getInitialState() {
        return { current_route: 'login' };
    },

    getCurrentRoute() {
        // TODO: it's weird that I have to call the routes as
        //       functions. Maybe because of a require() circle dep?
        //       Should try to fix this at some point.
        return routes[this.state.current_route]();
    },

    render() {
        return (
            <NavigatorIOS
                style={styles.navWrap}
                navigationBarHidden={true}
                initialRoute={this.getCurrentRoute()}
            />
        );
    }
});

AppRegistry.registerComponent('Reflection', () => Reflection);

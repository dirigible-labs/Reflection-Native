/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

let React = require('react-native');
let {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const Reflection = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Reflection
                </Text>
                <Text style={styles.instructions}>
                    Check a box
                </Text>
                <Text style={styles.instructions}>
                    Box 1
                    Box 2
                    Box 3
                    Box 4
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
});

AppRegistry.registerComponent('Reflection', () => Reflection);

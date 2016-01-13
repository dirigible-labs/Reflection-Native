'use strict';

const React = require('react-native');

const {
    View,
    Text,
    StyleSheet,
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
});

const DataScreen = React.createClass({

    render() {
        return (
            <View style={styles.container}><Text>DataScreen</Text></View>
        );
    }
});

module.exports = DataScreen;

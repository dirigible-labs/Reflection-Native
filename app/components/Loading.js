'use strict';

const React = require('react-native');

const {
    View,
    Text,
} = React;

const Loading = React.createClass({

    render() {
        return (
            <View><Text>Loading</Text></View>
        );
    }
});

module.exports = Loading;

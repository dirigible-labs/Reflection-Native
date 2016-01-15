'use strict';

const React = require('react-native');

const RecordButton = require('../component/RecordButton');
const ToolBar = require('../component/ToolBar');
const colors = require('../component/colors');

const {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = React;


const SMILY = ':-)',
      SAD = ':-(',
      ANGRY = '>:|',
      SURPRISED = '(:-0';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    content: {
        flex: 1, flexDirection: 'column'
    },

    buttonRow: {
        flex: 1,
        flexDirection: 'row',
    },

    button: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    buttonText: {
        // backgroundColor: 'white',
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    }
});

const RecordScreen = React.createClass({

    getInitialState() {
        return {
            recording: false,
            success: false,
        };
    },

    _recordEvent(type, callback) {
        this.setState({ recording: true });
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: type,
            })
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            this.setState({ recording: false, success: true });
            console.log('Response', responseJSON.data);
            callback(responseJSON.data);
        }).catch((e) => console.log('Error', e));
    },

    recordHappy(callback) {
        this._recordEvent('happy', callback);
    },

    recordSad(callback) {
        this._recordEvent('sad', callback);
    },

    recordAfraid(callback) {
        this._recordEvent('afraid', callback);
    },

    recordAngry(callback) {
        this._recordEvent('angry', callback);
    },

    confirmSuccess() {
        // Reset to initial state
        this.setState(this.getInitialState());
    },

    renderButtonView() {
        return (
            <View style={styles.content}>
                <View style={styles.buttonRow}>
                    <TouchableHighlight underlayColor={colors.a_light} onPress={this.recordHappy} style={[styles.button, {backgroundColor: colors.a}]}>
                        <Text style={styles.buttonText}>{SMILY}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={colors.b_light} onPress={this.recordSad} style={[styles.button, {backgroundColor: colors.b}]}>
                        <Text style={styles.buttonText}>{SAD}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableHighlight underlayColor={colors.d_light} onPress={this.recordAfraid} style={[styles.button, {backgroundColor: colors.d}]}>
                        <Text style={styles.buttonText}>{SURPRISED}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={colors.e_light} onPress={this.recordAngry} style={[styles.button, {backgroundColor: colors.e}]}>
                        <Text style={styles.buttonText}>{ANGRY}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    },

    render() {
        return (
            <View style={styles.screen}>
                <ToolBar />
                {this.state.recording ?
                    <Text>Recording</Text> :
                    this.state.success ?
                    <View>
                        <Text>Success</Text>
                        <RecordButton title="Okay" onPress={this.confirmSuccess} />
                    </View> : this.renderButtonView()
                }
            </View>
        );
    }
});

module.exports = RecordScreen;

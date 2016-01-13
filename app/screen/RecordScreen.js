'use strict';

const React = require('react-native');

const RecordButton = require('../component/RecordButton');

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

    render() {
        return (
            <View style={styles.container}>
            {this.state.recording ?
                <Text>Recording</Text> :
                this.state.success ?
                <View>
                    <Text>Success</Text>
                    <RecordButton title="Okay" onPress={this.confirmSuccess} />
                </View> :
                <View>
                    <View>
                        <RecordButton title="Happy" onPress={this.recordHappy} />
                    </View>

                    <View>
                        <RecordButton title="Sad" onPress={this.recordSad} />
                    </View>

                    <View>
                        <RecordButton title="Afraid / Surprised" onPress={this.recordAfraid} />
                    </View>

                    <View>
                        <RecordButton title="Angry / Disgusted" onPress={this.recordAngry} />
                    </View>
                </View>
            }
            </View>
        );
    }
});

module.exports = RecordScreen;

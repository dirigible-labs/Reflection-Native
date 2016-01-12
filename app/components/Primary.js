'use strict';

const React = require('react-native');
const { FBSDKLoginButton } = require('react-native-fbsdklogin');

const layout = require('../layout');
const RecordButton = require('./RecordButton');

const {
    View,
    Text,
} = React;


const PrimaryScreen = React.createClass({

    getInitialState() {
        return {
            recording: false,
            success: false,
        };
    },

    propTypes: {
        onLogoutFinished: React.PropTypes.func.isRequired
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
            <View style={layout.container}>
            {this.state.recording ?
                <Text>Recording</Text> :
                this.state.success ?
                <View>
                    <Text>Success</Text>
                    <RecordButton title="Okay" onPress={this.confirmSuccess} />
                </View> :
                <View>
                    <View style={layout.quarterHeight}>
                        <RecordButton title="Happy" onPress={this.recordHappy} />
                    </View>

                    <View style={layout.quarterHeight}>
                        <RecordButton title="Sad" onPress={this.recordSad} />
                    </View>

                    <View style={layout.quarterHeight}>
                        <RecordButton title="Afraid / Surprised" onPress={this.recordAfraid} />
                    </View>

                    <View style={layout.quarterHeight}>
                        <RecordButton title="Angry / Disgusted" onPress={this.recordAngry} />
                    </View>

                    <FBSDKLoginButton
                        onLoginFinished={() => {}}
                        onLogoutFinished={this.props.onLogoutFinished}
                        readPermissions={[]}
                        publishPermissions={[]}
                    />
                </View>
            }
            </View>
        );
    }
});

module.exports = PrimaryScreen;

'use strict';

const React = require('react-native');

const ToolBar = require('../component/ToolBar');
const colors = require('../component/colors');

const {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Component,
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

class RecordButton extends Component {

    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor}
                onPress={this.props.onPress}
                style={[styles.button, {backgroundColor: this.props.backgroundColor}]}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

RecordButton.propTypes = {
    underlayColor: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func.isRequired,
}


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
                    <RecordButton
                        underlayColor={colors.a_light}
                        onPress={this.recordHappy}
                        backgroundColor={colors.a}
                        text={SMILY}
                    />
                    <RecordButton
                        underlayColor={colors.b_light}
                        onPress={this.recordSad}
                        backgroundColor={colors.b}
                        text={SAD}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <RecordButton
                        underlayColor={colors.d_light}
                        onPress={this.recordAfraid}
                        backgroundColor={colors.d}
                        text={SURPRISED}
                    />
                    <RecordButton
                        underlayColor={colors.e_light}
                        onPress={this.recordAngry}
                        backgroundColor={colors.e}
                        text={ANGRY}
                    />
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
                        <RecordButton
                            text="Okay"
                            onPress={this.confirmSuccess}
                            underlayColor={colors.e_light}
                            backgroundColor={colors.e}
                        />
                    </View> : this.renderButtonView()
                }
            </View>
        );
    }
});

module.exports = RecordScreen;

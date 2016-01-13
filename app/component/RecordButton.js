'use strict';

const AwesomeButton = require('react-native-awesome-button');
const React = require('react-native');

const {
    StyleSheet,
} = React;

const styles = StyleSheet.create({
    buttonBackground: {
        // flex: 1,
        height: 40,
        borderRadius: 5,
        margin: 20,
    },
    buttonLabel: {
        color: 'white'
    }
});

const RecordButton = React.createClass({

    propTypes: {
        onPress: React.PropTypes.func.isRequired,
        title: React.PropTypes.string.isRequired,
    },

    getInitialState() {
        return {
            buttonState: 'idle',
        }
    },

    _onPress() {
        // this.setState({ 'buttonState': 'busy' });
        this.props.onPress(() => {});
    },

    render() {
        return (
            <AwesomeButton
                backgroundStyle={styles.buttonBackground}
                labelStyle={styles.buttonLabel}
                transitionDuration={200}
                states={{
                  idle: {
                    text: this.props.title,
                    onPress: this._onPress,
                    backgroundColor: '#1155DD',
                  },
                  busy: {
                    backgroundColor: '#002299',
                    spinner: true,
                  },
                  success: {
                    text: '√',
                    backgroundColor: '#339944'
                  }
                }}
                buttonState={this.state.buttonState}
            />
        );
    }
});

module.exports = RecordButton;

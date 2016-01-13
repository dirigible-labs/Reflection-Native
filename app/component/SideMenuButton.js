'use strict';

const AwesomeButton = require('react-native-awesome-button');
const React = require('react-native');

const {
    StyleSheet,
    View,
} = React;

const styles = StyleSheet.create({
    buttonBackground: {
        // flex: 1,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        // alignItems: 'stretch',
    },
    buttonLabel: {
        color: 'white'
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
    }
});

const SideMenuButton = React.createClass({

    propTypes: {
        onPress: React.PropTypes.func.isRequired,
        title: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <View style={styles.buttonRow}>
                <AwesomeButton
                    backgroundStyle={styles.buttonBackground}
                    labelStyle={styles.buttonLabel}
                    transitionDuration={200}
                    states={{
                      default: {
                        text: this.props.title,
                        onPress: this.props.onPress,
                        backgroundColor: '#1155DD',
                      },
                    }}
                />
            </View>
        );
    }
});

module.exports = SideMenuButton;

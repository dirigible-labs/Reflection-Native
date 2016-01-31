'use strict';

const React = require('react-native');

const colors = require('./colors');

const {
    StyleSheet,
    Text,
    TouchableHighlight,
    Component,
} = React;


const styles = StyleSheet.create({

    button: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'stretch',
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    }
});

class Button extends Component {

    calculateStyle() {
        return [
            styles.button,
            {
                backgroundColor: this.props.backgroundColor || colors.a,
                alignItems: this.props.alignItems || 'center',
            }
        ];
    }

    onPress() {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor || colors.a_light}
                onPress={this.onPress.bind(this)}
                style={this.calculateStyle()}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

Button.propTypes = {
    alignItems: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    underlayColor: React.PropTypes.string,
    onPress: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
};

module.exports = Button;

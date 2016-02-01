'use strict';

const React = require('react-native');

const {
    View,
    StyleSheet,
} = React;

const Button = require('../component/Button');

const { RecordType } = require('../models');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
    },

    content: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        // width: 60,
        height: 60,
        // borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 0,
        // alignItems: 'flex-end'
        // right: 10,
    },

    textView: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
    }
});

class ConfirmScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    onConfirm() {
        this.props.onConfirm();
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button
                    backgroundColor={this.props.recordType.color}
                    underlayColor={this.props.recordType.color_light}
                    onPress={this.onConfirm.bind(this)}
                    text="ok"
                />
            </View>
        );
    }
};

ConfirmScreen.propTypes = {
    recordType: React.PropTypes.instanceOf(RecordType).isRequired,
    onConfirm: React.PropTypes.func.isRequired,
}

module.exports = ConfirmScreen;

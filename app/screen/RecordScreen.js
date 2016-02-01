'use strict';

const React = require('react-native');
const {
    StyleSheet,
    View,
    Component,
} = React;

const Button = require('../component/Button');
const TopBar = require('../component/TopBar');

const { RecordType } = require('../models');

const ConfirmScreen = require('./ConfirmScreen');
const LoadingScreen = require('./LoadingScreen');

const HAPPY = new RecordType('happy', ':-)', 'a');
const SAD = new RecordType('sad', ':-(', 'b');
const ANGRY = new RecordType('angry', '>:|', 'd');
const SURPRISED = new RecordType('surprised', '(:-0', 'e');

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
});


class RecordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recording: null,
            success: false,
        }
    }

    recordEvent(type, callback) {
        this.setState({ recording: type });
        fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: type.name,
            })
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            this.setState({ success: true });
            console.log('Response', responseJSON.data);
            callback(responseJSON.data);
        }).catch((e) => console.log('Error', e));
    }

    openMenu() {
        this.props.openMenu();
    }

    confirmSuccess() {
        this.setState({
            recording: null,
            success: false,
        });
    }

    undoRecord() {
        this.setState({
            recording: null,
            success: false,
        });
    }

    renderLoadingView() {
        return (
            <LoadingScreen
                backgroundColor={this.state.recording.color}
            />
        );
    }

    renderConfirmView() {
        return (
            <ConfirmScreen
                recordType={this.state.recording}
                onConfirm={this.confirmSuccess.bind(this)}
            />
        );
    }

    renderRecordView() {

        let recordButton = (type) => {
            return (
                <Button
                    underlayColor={type.color_light}
                    onPress={this.recordEvent.bind(this, type)}
                    backgroundColor={type.color}
                    text={type.symbol}
                />
            )
        };

        return (
            <View style={styles.content}>
                <View style={styles.buttonRow}>
                    {recordButton(HAPPY)}
                    {recordButton(SAD)}
                </View>
                <View style={styles.buttonRow}>
                    {recordButton(SURPRISED)}
                    {recordButton(ANGRY)}
                </View>
            </View>
        );
    }

    render() {
        const view =
            this.state.success ?
                this.renderConfirmView() :
                this.state.recording ?
                    this.renderLoadingView() :
                    this.renderRecordView();

        return (
            <View style={styles.screen}>
                <TopBar openMenu={this.openMenu.bind(this)}/>
                {view}
            </View>
        );
    }
}

RecordScreen.propTypes = {
    openMenu: React.PropTypes.func.isRequired,
};

module.exports = RecordScreen;

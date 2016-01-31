'use strict';

const React = require('react-native');

const TopBar = require('../component/TopBar');
const colors = require('../component/colors');

const Button = require('../component/Button');

const {
    StyleSheet,
    Text,
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
});


class RecordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            success: false,
        }
    }

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
    }

    openMenu() {
        this.props.openMenu();
    }

    recordHappy(callback) {
        this._recordEvent('happy', callback);
    }

    recordSad(callback) {
        this._recordEvent('sad', callback);
    }

    recordAfraid(callback) {
        this._recordEvent('afraid', callback);
    }

    recordAngry(callback) {
        this._recordEvent('angry', callback);
    }

    confirmSuccess() {
        this.setState({
            recording: false,
            success: false,
        });
    }

    renderButtonView() {
        return (
            <View style={styles.content}>
                <View style={styles.buttonRow}>
                    <Button
                        underlayColor={colors.a_light}
                        onPress={this.recordHappy.bind(this)}
                        backgroundColor={colors.a}
                        text={SMILY}
                    />
                    <Button
                        underlayColor={colors.b_light}
                        onPress={this.recordSad.bind(this)}
                        backgroundColor={colors.b}
                        text={SAD}
                    />
                </View>
                <View style={styles.buttonRow}>
                    <Button
                        underlayColor={colors.d_light}
                        onPress={this.recordAfraid.bind(this)}
                        backgroundColor={colors.d}
                        text={SURPRISED}
                    />
                    <Button
                        underlayColor={colors.e_light}
                        onPress={this.recordAngry.bind(this)}
                        backgroundColor={colors.e}
                        text={ANGRY}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <TopBar openMenu={this.openMenu.bind(this)}/>
                {this.state.recording ?
                    <Text>Recording</Text> :
                    this.state.success ?
                    <View>
                        <Text>Success</Text>
                        <Button
                            text="Okay"
                            onPress={this.confirmSuccess.bind(this)}
                            underlayColor={colors.e_light}
                            backgroundColor={colors.e}
                        />
                    </View> : this.renderButtonView()
                }
            </View>
        );
    }
}

RecordScreen.propTypes = {
    openMenu: React.PropTypes.func.isRequired,
};

module.exports = RecordScreen;

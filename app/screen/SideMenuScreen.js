'use strict';

const React = require('react-native');

const {
    Text,
    StyleSheet,
    View,
    Component,
    Dimensions,
    TouchableHighlight,
} = React;

const { FBSDKLoginButton } = require('react-native-fbsdklogin');

const window = Dimensions.get('window');
const colors = require('../component/colors');

const styles = StyleSheet.create({
    screen: {
        width: window.width,
        height: window.height,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
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
    },
});


class SideMenuButton extends Component {

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

SideMenuButton.propTypes = {
    underlayColor: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func.isRequired,
}

const SideMenu = React.createClass({

    propTypes: {
        updateRoute: React.PropTypes.func.isRequired,
        onLogoutFinished: React.PropTypes.func.isRequired,
    },

    setRoutePrimary() {
        this.props.updateRoute('record');
    },

    setRouteData() {
        this.props.updateRoute('data');
    },

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.content}>
                    <View style={styles.buttonRow}>
                        <SideMenuButton
                            backgroundColor={colors.a_light}
                            underlayColor={colors.a}
                            onPress={this.setRoutePrimary}
                            text="Record"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <SideMenuButton
                            backgroundColor={colors.b_light}
                            underlayColor={colors.b}
                            onPress={this.setRouteData}
                            text="Data"
                        />
                    </View>
                    <FBSDKLoginButton
                        onLoginFinished={() => {}}
                        onLogoutFinished={this.props.onLogoutFinished}
                        readPermissions={[]}
                        publishPermissions={[]}
                    />
                </View>
            </View>
        );
    }
});

module.exports = SideMenu;

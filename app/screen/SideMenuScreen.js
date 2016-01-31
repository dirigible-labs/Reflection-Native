'use strict';

const React = require('react-native');

const {
    StyleSheet,
    View,
    Dimensions,
} = React;

const { FBSDKLoginButton } = require('react-native-fbsdklogin');

const Button = require('../component/Button');

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
        flex: 1,
        flexDirection: 'column',
    },

    buttonRow: {
        // flex: 1,
        // flexDirection: 'row',
        height: 80,
    },
});


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
                        <Button
                            backgroundColor={colors.a_light}
                            underlayColor={colors.a}
                            onPress={this.setRoutePrimary}
                            text="Record"
                            alignItems="flex-start"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button
                            backgroundColor={colors.b_light}
                            underlayColor={colors.b}
                            onPress={this.setRouteData}
                            text="Data"
                            alignItems="flex-start"
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

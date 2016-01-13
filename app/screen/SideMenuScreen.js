'use strict';

const React = require('react-native');

const {
    StyleSheet,
    View,
} = React;

const { FBSDKLoginButton } = require('react-native-fbsdklogin');

const SideMenuButton = require('../component/SideMenuButton');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const SideMenu = React.createClass({

    propTypes: {
        updateRoute: React.PropTypes.func.isRequired,
        onLogoutFinished: React.PropTypes.func.isRequired,
    },

    setRoutePrimary() {
        this.props.updateRoute('primary');
    },

    setRouteData() {
        this.props.updateRoute('data');
    },

    setRouteSettings() {
        this.props.updateRoute('settings');
    },

    render() {
        return (
            <View style={styles.container}>
                <SideMenuButton onPress={this.setRoutePrimary} title="Reflections" />
                <SideMenuButton onPress={this.setRouteData} title="Data" />
                <SideMenuButton onPress={this.setRouteSettings} title="Settings" />
                <FBSDKLoginButton
                    onLoginFinished={() => {}}
                    onLogoutFinished={this.props.onLogoutFinished}
                    readPermissions={[]}
                    publishPermissions={[]}
                />
            </View>
        );
    }
});

module.exports = SideMenu;

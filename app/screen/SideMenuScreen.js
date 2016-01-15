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
        this.props.updateRoute('record');
    },

    setRouteData() {
        this.props.updateRoute('data');
    },

    render() {
        return (
            <View style={styles.container}>
                <SideMenuButton onPress={this.setRoutePrimary} title="Record" />
                <SideMenuButton onPress={this.setRouteData} title="Data" />
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

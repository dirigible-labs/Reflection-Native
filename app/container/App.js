'use strict';

const React = require('react-native');

const SideMenu = require('react-native-side-menu');
var { FBSDKAccessToken } = require('react-native-fbsdkcore');


const {
    Component,
} = React;

const DataScreenContainer = require('./DataScreenContainer');

const LoginScreen = require('../screen/LoginScreen');
const RecordScreen = require('../screen/RecordScreen');
const LoadingScreen = require('../screen/LoadingScreen');
const SideMenuScreen = require('../screen/SideMenuScreen')


class Reflection extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // Data state
            user_logged_in: false,
            user_loaded: false,
            user_access_token: null,

            // UI state
            current_route: 'record',
            is_menu_open: false,
        }
    }

    openMenu() {
        this.setState({ is_menu_open: true });
    }

    getCurrentAccessToken() {
        FBSDKAccessToken.getCurrentAccessToken((token) => {
            let tokenString = token ? token.tokenString : null;
            this.setState({
                user_logged_in: Boolean(tokenString),
                user_loaded: true,
                user_token_string: tokenString,
            });
        });
    }

    updateRoute(route) {
        this.setState({ current_route: route });
    }

    renderCurrentRoute() {
        if (!this.state.user_loaded)
            return <LoadingScreen />;

        if (!this.state.user_logged_in)
            return <LoginScreen onLoginFinished={this.getCurrentAccessToken.bind(this)} />;

        if (this.state.current_route === 'data')
            return <DataScreenContainer />;

        if (this.state.current_route === 'record')
            return <RecordScreen openMenu={this.openMenu.bind(this)} />;
    }

    componentWillMount() {
        this.getCurrentAccessToken();
    }

    renderSideMenu() {
        return (
            <SideMenuScreen
                updateRoute={this.updateRoute.bind(this)}
                onLogoutFinished={this.getCurrentAccessToken.bind(this)}
            />
        );
    }

    render() {

        return (
            <SideMenu menu={this.renderSideMenu()} isOpen={this.state.is_menu_open}>
                { this.renderCurrentRoute() }
            </SideMenu>
        );
    }
}

module.exports = Reflection;

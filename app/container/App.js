'use strict';

const React = require('react-native');

const SideMenu = require('react-native-side-menu');
var { FBSDKAccessToken } = require('react-native-fbsdkcore');


const {
    Component,
} = React;


const DataScreen = require('../screen/DataScreen');
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
        this.setState({
            current_route: route,
            is_menu_open: false,
        });
    }

    componentWillMount() {
        this.getCurrentAccessToken();
    }

    renderMain() {
        let Screen = this.state.current_route === 'data' ? DataScreen : RecordScreen;
        let menu = (
            <SideMenuScreen
                updateRoute={this.updateRoute.bind(this)}
                onLogoutFinished={this.getCurrentAccessToken.bind(this)}
            />
        );
        return (
            <SideMenu menu={menu} isOpen={this.state.is_menu_open}>
                <Screen openMenu={this.openMenu.bind(this)} />
            </SideMenu>
        );
    }

    render() {
        if (!this.state.user_loaded)
            return <LoadingScreen />;

        if (!this.state.user_logged_in)
            return <LoginScreen onLoginFinished={this.getCurrentAccessToken.bind(this)} />;

        return this.renderMain();
    }
}

module.exports = Reflection;

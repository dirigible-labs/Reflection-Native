module.exports = {
    login: () => {
        return {
            title: 'Login',
            component: require('./screens/Login'),
        };
    },

    primary: () => {
        return {
            title: 'Record',
            component: require('./screens/Primary'),
        };
    },

    registration: () => {
        return {
            title: 'Registration',
            component: require('./screens/Registration'),
        };
    },

    settings: () => {
        return {
            title: 'Settings',
            component: require('./screens/Settings'),
        };
    },

    visualizations: () => {
        return {
            title: 'Reflect',
            component: require('./screens/Visualizations'),
        };
    },
}
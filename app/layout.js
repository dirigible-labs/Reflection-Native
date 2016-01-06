const {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flex: 1,
        backgroundColor: '#efefef',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    loginButtonBackground: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        margin: 20,
    },
    loginButtonLabel: {
        color: 'white'
    }
});
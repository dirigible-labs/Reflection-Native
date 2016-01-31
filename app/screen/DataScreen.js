'use strict';

const React = require('react-native');

const TopBar = require('../component/TopBar');

const {
    View,
    Text,
    StyleSheet,
} = React;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    content: {
        flex: 1, flexDirection: 'column'
    },
});

class DataScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    openMenu() {
        this.props.openMenu();
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.content}>
                    <TopBar openMenu={this.openMenu.bind(this)}/>
                    <Text>Data</Text>
                </View>
            </View>
        );
    }
}

DataScreen.propTypes = {
    openMenu: React.PropTypes.func.isRequired,
}

module.exports = DataScreen;

'use strict';

const React = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  Component
} = React;


const colors = require('./colors');

class TopBar extends Component {

    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.openMenu();
    }

    render() {
        return (
            <View>
                <View style={styles.toolbar}>
                    <Text onPress={this.onPress.bind(this)} style={styles.toolbarButton}>Menu</Text>
                    <Text style={styles.toolbarTitle}>Reflection</Text>
                    <Text style={styles.toolbarButton}>?</Text>
                </View>
            </View>
        );
    }
}

TopBar.propTypes = {
    openMenu: React.PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: colors.a_light,
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
    },

    toolbarButton:{
        width: 60,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff33',
        textAlign: 'center',
    },

    toolbarTitle:{
        color: '#ffffff88',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        flex: 1,
    },

});

module.exports = TopBar;

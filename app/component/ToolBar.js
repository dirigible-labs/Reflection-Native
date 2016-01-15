'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component
} = React;


class ToolBar extends Component{
    render() {
        return (
            <View>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}>Menu</Text>
                    <Text style={styles.toolbarTitle}>Reflection</Text>
                    <Text style={styles.toolbarButton}>?</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'    //Step 1
    },

    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },

    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },

});

module.exports = ToolBar;
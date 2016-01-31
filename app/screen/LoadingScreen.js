'use strict';

const React = require('react-native');

const {
    View,
    Text,
    StyleSheet,
} = React;

const colors = require('../component/colors');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white'
    }
});


const getNextText = (() => {

    const TEXT = [
        '..  ',
        '... ',
        ' ...',
        '  ..',
        '.  .',
    ];
    // const TEXT = [
    //     '8)',
    //     ':(',
    //     ':)',
    //     ':/',
    //     ':3',
    //     ':<',
    //     ':>',
    //     ':[',
    //     ':\\',
    //     ':]',
    //     ':^)',
    //     ':c',
    //     ':c)',
    //     ':D',
    //     ':L',
    //     ':o)',
    //     ':S',
    //     ':{',
    //     ':}',
    //     ':‑(',
    //     ':‑)',
    //     ':‑.',
    //     ':‑/',
    //     ':‑<',
    //     ':‑[',
    //     ':‑c',
    //     ':っ)',
    //     ':っC',
    //     '=(',
    //     '=)',
    //     '=)',
    //     '=/',
    //     '=\\',
    //     '=]',
    //     '=L',
    //     '={',
    //     '={}',
    //     '>.<',
    //     '>:/',
    //     '>:[',
    //     '>:\\',
    //     '¯\\_(ツ)_/¯',
    // ];

    let current = Math.floor(Math.random() * TEXT.length);

    return () => {
        current++;
        if (current >= TEXT.length) current = 0;
        return TEXT[current];
    }
})();

class LoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        let colorKeys = Object.keys(colors);
        let backgroundColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];

        this.state = {
            loadingText: getNextText(),
            backgroundColor
        }
    }

    setNextFace () {
        this._nextFace = setTimeout(()=> {
            this.setState({loadingText: getNextText()});
            this.setNextFace();
        }, 500);
    }

    componentWillUnmount () {
        clearTimeout(this._nextFace);
    }

    componentDidMount () {
        this.setNextFace();
    }

    render() {


        return (
            <View style={styles.screen}>
                <View style={[styles.content, {backgroundColor: this.state.backgroundColor}]}>
                    <Text style={styles.text}>{this.state.loadingText}</Text>
                </View>
            </View>
        );
    }

};

module.exports = LoadingScreen;

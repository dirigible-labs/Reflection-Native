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


const getText = (() => {

    const TEXT = [
        '•     ',
        ' •    ',
        '  •   ',
        '   •  ',
        '    • ',
        '     •',
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


const getRandomColor = () => {
    let colorKeys = Object.keys(colors);
    return colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
}


class LoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.backgroundColor = this.props.backgroundColor || getRandomColor();
        this.state = {
            loadingText: getText()
        }
    }

    startNextTextTimer () {
        this._nextTextTimer = setTimeout(()=> {
            this.setState({ loadingText: getText() });
            this.startNextTextTimer();
        }, 500);
    }

    componentWillUnmount () {
        clearTimeout(this._nextTextTimer);
    }

    componentDidMount () {
        this.startNextTextTimer();
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={[styles.content, {backgroundColor: this.backgroundColor}]}>
                    <Text style={styles.text}>{this.state.loadingText}</Text>
                </View>
            </View>
        );
    }

};

LoadingScreen.propTypes = {
    backgroundColor: React.PropTypes.string,
}

module.exports = LoadingScreen;

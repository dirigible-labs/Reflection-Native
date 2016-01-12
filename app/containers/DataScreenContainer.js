'use strict';

const React = require('react-native');

const DataScreen = require('../components/DataScreen');

const DataScreenContainer = React.createClass({

    componentWillMount() {
        setTimeout(() => {
            this.setState({ data: [{type: 'happy'}, { type: 'sad' }]});
        }, 2000)
    },

    getInitialState() {
        return {
            loading: true,
            data: []
        }
    },

    render() {
        return (
            <DataScreen
                data={this.state.data}
            />
        );
    }
});

module.exports = DataScreenContainer;

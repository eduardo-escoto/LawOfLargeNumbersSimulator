import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

class CoinFlip extends Component {
    render() {
        return (
            <Card title={<span>Coin Flip <span role="img" aria-label="alien">👾</span></span>}>
                <Card
                    type="inner"
                    title="Heads">
                    Heads: {this.props.simulationData.experimentData.coinFlip[0]}
                </Card>
                <Card
                    type="inner"
                    title="Tails">
                    Tails: {this.props.simulationData.experimentData.coinFlip[1]}
                </Card>
            </Card>
        );
    }
}
function mapStateToProps({ importantWidths, simulationData }) {
    return {
        importantWidths,
        simulationData
    };
};
export default connect(mapStateToProps)(CoinFlip);
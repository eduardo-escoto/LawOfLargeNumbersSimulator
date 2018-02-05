import React from 'react';
import { connect } from 'react-redux';
import ExperimentCard from '../Components/experimentCard';

function CoinFlip(props) {

    const emoji = "👾";
    const emojiName = "alien"
    const title = "Coin Flip ";
    const experimentType = "Flip";
    const experimentalYield = "1/2";
    const experimentalYieldNum = (1 / 2);
    const experimentSubjects = ["Heads Side", "Tails Side"];
    const trialNumber = props.simulationData.trialNumber
    const data = props.simulationData.experimentData.coinFlip;

    return (
        <ExperimentCard
            data={data}
            emoji={emoji}
            title={title}
            arrayForm={false}
            emojiName={emojiName}
            trialNumber={trialNumber}
            experimentType={experimentType}
            experimentalYield={experimentalYield}
            experimentSubjects={experimentSubjects}
            experimentalYieldNum={experimentalYieldNum}
        />
    );
}

function mapStateToProps({ importantWidths, simulationData }) {
    return {
        importantWidths,
        simulationData
    };
};
export default connect(mapStateToProps)(CoinFlip);
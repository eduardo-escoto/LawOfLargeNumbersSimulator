import React from 'react';
import { connect } from 'react-redux';
import ExperimentCard from '../Components/experimentCard';

function MarbleBag(props) {

    const emoji = "🌸";
    const emojiName = "flower"
    const title = "Marble Bag ";
    const experimentType = "Pull";
    const experimentalYield = ["4/20", "2/20", "6/20", "8/20"];
    const experimentalYieldNum = [(4 / 20), (2 / 20), (6 / 20), (8 / 20)];
    const experimentSubjects = ["Red Marble", "Blue Marble", "Green Marble", "Yellow Marble"];
    const trialNumber = props.simulationData.trialNumber;
    const data = props.simulationData.experimentData.marbleBag;

    return (
        <ExperimentCard
            data={data}
            emoji={emoji}
            title={title}
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
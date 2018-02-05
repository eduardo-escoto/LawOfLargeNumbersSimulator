import React from 'react';
import { connect } from 'react-redux';
import ExperimentCard from '../Components/experimentCard';

function TwelveSidedDie(props) {
    const emoji = "🎲";
    const emojiName = "dice"
    const experimentType = "Roll";
    const experimentalYield = "1/12";
    const experimentalYieldNum = (1 / 12);
    const title = "Twelve Sided Dice Roll ";
    const trialNumber = props.simulationData.trialNumber
    const data = props.simulationData.experimentData.diceRolls.twelveSidedDie;
    const experimentSubjects = [
        "Side 1", "Side 2", "Side 3", "Side 4", "Side 5", "Side 6",
        "Side 7", "Side 8", "Side 9", "Side 10", "Side 11", "Side 12"
    ];

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
export default connect(mapStateToProps)(TwelveSidedDie);
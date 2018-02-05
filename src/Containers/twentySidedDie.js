import React from 'react';
import { connect } from 'react-redux';
import ExperimentCard from '../Components/experimentCard';

function TwentySidedDie(props) {
    const emoji = "🎲";
    const emojiName = "dice"
    const experimentType = "Roll";
    const experimentalYield = "1/20";
    const experimentalYieldNum = (1 / 20);
    const title = "20 Sided Dice Roll ";
    const trialNumber = props.simulationData.trialNumber
    const data = props.simulationData.experimentData.diceRolls.twentySidedDie;
    const experimentSubjects = [
        "Side 1", "Side 2", "Side 3", "Side 4", "Side 5",
        "Side 6", "Side 7", "Side 8", "Side 9", "Side 10",
        "Side 11", "Side 12", "Side 13", "Side 14", "Side 15",
        "Side 16", "Side 17", "Side 18", "Side 19", "Side 20"
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
export default connect(mapStateToProps)(TwentySidedDie);
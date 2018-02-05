import React from 'react';
import { connect } from 'react-redux';
import ExperimentCard from '../Components/experimentCard';

function EightSidedDie(props) {
    const emoji = "🎲";
    const emojiName = "dice"
    const experimentType = "Roll";
    const experimentalYield = "1/8";
    const experimentalYieldNum = (1 / 8);
    const title = "Eight Sided Dice Roll ";
    const trialNumber = props.simulationData.trialNumber
    const data = props.simulationData.experimentData.diceRolls.eightSidedDie;
    const experimentSubjects = ["Side 1", "Side 2", "Side 3", "Side 4", "Side 5", "Side 6", "Side 7", "Side 8"];

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
export default connect(mapStateToProps)(EightSidedDie);
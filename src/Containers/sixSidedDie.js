import React from 'react';
import { connect } from 'react-redux';
import ExperimentCard from '../Components/experimentCard';

function SixSidedDie(props) {
    const emoji = "🎲";
    const emojiName = "dice"
    const experimentType = "Roll";
    const experimentalYield = "1/6";
    const experimentalYieldNum = (1 / 6);
    const title = "Six Sided Dice Roll ";
    const trialNumber = props.simulationData.trialNumber
    const data = props.simulationData.experimentData.diceRolls.sixSidedDie;
    const experimentSubjects = ["Side 1", "Side 2", "Side 3", "Side 4", "Side 5", "Side 6"];

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
export default connect(mapStateToProps)(SixSidedDie);
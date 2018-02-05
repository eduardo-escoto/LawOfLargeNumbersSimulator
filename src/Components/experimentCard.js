import React from 'react';
import { Card } from 'antd';
import ExperimentInnerCard from './experimentInnerCard';

export default function ExperimentCard(props) {
    const style = {
        margin: "10px 30px 10px 30px",
        padding: "0px 0px 0px 0px"
    };
    const innerCards = props.data.map((data, index) => {
        return (
            <ExperimentInnerCard
                data={data}
                experimentSubject={props.experimentSubjects[index]}
                experimentType={props.experimentType}
                experimentalYield={props.experimentalYield}
                experimentalYieldNum={props.experimentalYieldNum}
                totalNumber={props.trialNumber}
            />
        );
    });
    return (
        <Card
            style={style}
            title={<span>{props.title}<span role="img" aria-label={props.emojiName}>{props.emoji}</span>
                <div>Trials: {props.trialNumber}</div>
            </span>}>
            {innerCards}
        </Card>);
}
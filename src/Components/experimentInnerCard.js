import React from 'react';
import { Card, Divider } from 'antd';

const style = {
    margin: "5px 0px 0px 0px",
}

export default function ExperimentInnerCard(props) {
    let actualYieldString = `${props.data}/${props.totalNumber}`;
    let actualYield = (props.data / props.totalNumber);
    if (isNaN(actualYield)) {
        actualYieldString = 0;
        actualYield = 0;
    }
    return (
        <Card
            style={style}
            type="inner"
            title={props.experimentSubject}>
            Total {props.experimentSubject}: {props.data}
            <Divider />
            Threortical {props.experimentSubject} {props.experimentType} Yield: {props.experimentalYield} = {props.experimentalYieldNum.toFixed(4)} = {props.experimentalYieldNum.toFixed(2) * 100}%
            <Divider />
            Actual {props.experimentSubject} {props.experimentType} Yield: {actualYieldString} = {(actualYield).toFixed(4)} = {((actualYield) * 100).toFixed(2)}%
        </Card>
    );
}
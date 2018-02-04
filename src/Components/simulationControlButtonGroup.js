import React from 'react';
import { Button } from 'antd'
export default function SimulationButtonControlGroup(props) {
    return (
        <div style={{ textAlign: "center", paddingLeft: "20px" }}>
            <span style={{ display: "inline-block", paddingRight: "10px" }}>
                <Button ghost type="primary" size={props.size} onClick={props.startClicked}>Start</Button>
            </span>
            <span style={{ display: "inline-block", paddingRight: "10px" }}>
                <Button size={props.size} onClick={props.pauseClicked}>Pause</Button>
            </span>
            <span style={{ display: "inline-block", paddingRight: "10px" }}>
                <Button ghost type="danger" size={props.size} onClick={props.resetClicked}>Reset</Button>
            </span>
        </div>
    );
}
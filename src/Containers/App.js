import CoinFlip from './coinFlip';
import React, { Component } from 'react';
import NavBar from '../Components/navBar';
import SimulationControlButtonGroup from '../Components/simulationControlButtonGroup';

import { Divider } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { widthResizeActionCreator } from '../Actions/widthResizeAction';
import { startSimulationAction, resetSimulationAction, pauseSimulationAction, updateSimulationActionCreator } from '../Actions/simulationControlActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experimentCycle: null
        }
        this.individualExperimentCycle = this.individualExperimentCycle.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.startExperimentCycle = this.startExperimentCycle.bind(this);
        this.stopExperimentCycle = this.stopExperimentCycle.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.props.widthResizeActionCreator(window.innerWidth);
    }
    pauseSimulationButtonClicked() {
        this.stopExperimentCycle();
        this.props.dispatch(pauseSimulationAction);
    }
    startSimulationButtonClicked() {
        if (this.props.simulationData.paused) {
            this.props.dispatch(startSimulationAction);
            this.startExperimentCycle();
        }
    }
    resetSimulationButtonClicked() {
        this.stopExperimentCycle();
        this.props.dispatch(resetSimulationAction);
    }
    startExperimentCycle() {
        const experimentCycle = setInterval(this.individualExperimentCycle, 100);
        this.setState({ experimentCycle });
    }
    stopExperimentCycle() {
        clearInterval(this.state.experimentCycle);
    }
    marbleBagTrial() {
        const red = 4;
        const blue = 6;
        const green = 12;
        const yellow = 20;
        const random = this.getRandomInteger(20);
        switch (true) {
            case (random <= red): return 0;
            case (random <= blue): return 1;
            case (random <= green): return 2;
            case (random <= yellow): return 3;
            default: return null;
        }
    }
    individualExperimentCycle() {
        let experimentData = this.props.simulationData.experimentData;

        experimentData.marbleBag[this.marbleBagTrial()]++;
        experimentData.coinFlip[this.getRandomInteger(2) - 1]++;
        experimentData.diceRolls.sixSidedDie[this.getRandomInteger(6) - 1]++;
        experimentData.diceRolls.eightSidedDie[this.getRandomInteger(8) - 1]++;
        experimentData.diceRolls.twelveSidedDie[this.getRandomInteger(12) - 1]++;
        experimentData.diceRolls.twentySidedDie[this.getRandomInteger(20) - 1]++;

        this.props.updateSimulationActionCreator(this.props.simulationData.trialNumber + 1, experimentData)
    }
    getRandomInteger(integer) {
        const randomInt = Math.ceil(Math.random() * integer);
        return randomInt;
    }
    render() {
        return (
            <div>
                <NavBar minWidth={this.props.importantWidths.minWidth} width={this.props.importantWidths.width} />
                <Divider style={{ paddingTop: "0px", marginTop: "0px" }} />
                <SimulationControlButtonGroup
                    size="large"
                    resetClicked={this.resetSimulationButtonClicked.bind(this)}
                    pauseClicked={this.pauseSimulationButtonClicked.bind(this)}
                    startClicked={this.startSimulationButtonClicked.bind(this)}
                />
                <Divider />
                <CoinFlip />
            </div >
        );
    }
}
function mapStateToProps({ importantWidths, simulationData }) {
    return {
        importantWidths,
        simulationData
    };
};
function mapDispatchToProps(dispatch) {
    const boundActionCreators = bindActionCreators({
        widthResizeActionCreator,
        updateSimulationActionCreator
    }, dispatch);
    return { ...boundActionCreators, dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
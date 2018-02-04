import { Divider } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import NavBar from '../Components/navBar';
import SimulationControlButtonGroup from '../Components/simulationControlButtonGroup';
import { bindActionCreators } from 'redux';
import { widthResizeActionCreator } from '../Actions/widthResizeAction';
import { startSimulationAction, resetSimulationAction, pauseSimulationAction, updateSimulationActionCreator } from '../Actions/simulationControlActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        console.log("paused");
    }
    startSimulationButtonClicked() {
        console.log("start");
    }
    resetSimulationButtonClicked() {
        console.log("reset");
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
    return bindActionCreators({
        widthResizeActionCreator,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
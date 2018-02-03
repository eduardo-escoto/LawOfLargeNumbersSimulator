import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../Components/navBar';
import { widthResizeActionCreator } from '../Actions/widthResizeAction';

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
    render() {
        return (
            <NavBar minWidth={this.props.importantWidths.minWidth} width={this.props.importantWidths.width} />
        );
    }
}
function mapStateToProps({ importantWidths }) {
    return {
        importantWidths
    };
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        widthResizeActionCreator
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
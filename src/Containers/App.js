import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class App extends Component {
    render() {
        return (
            <div></div>
        );
    }
}
function mapStateToProps(state) {
    return {
        //objects to map};
    };
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        //actions
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import WideNav from '../Containers/wideNav';
import MobileNav from '../Containers/mobileNav';
import { Pages } from '../Reducers/changePageReducer';
class NavBar extends Component {
    changePage(e) {
        this.setState({
            current: e.key,
        });
        let selectedPage;
        switch (e.key) {
            case "title": selectedPage = Pages.allExperiments; break;
            case "coinFlip": selectedPage = Pages.coinFlip; break;
            case "marbleBag": selectedPage = Pages.marbleBag; break;
            case "6": selectedPage = Pages.sixSidedDie; break;
            case "8": selectedPage = Pages.eightSidedDie; break;
            case "12": selectedPage = Pages.twelveSidedDie; break;
            case "20": selectedPage = Pages.twentySidedDie; break;
            default: selectedPage = Pages.allExperiments; break;
        }
        console.log(e.key, Pages, "!!!!!");
        this.props.changePageActionCreator(selectedPage);
    }
    render() {
        return (this.props.width > this.props.minWidth) ? <WideNav changePage={this.changePage} /> : <MobileNav changePage={this.changePage} />;
    }
}

export default NavBar;
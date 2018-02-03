import React, { Component } from 'react';
import MobileNav from '../Containers/mobileNav';
import WideNav from '../Containers/wideNav';

class NavBar extends Component {
    render() {
        console.log(this.props.width, this.props.minWidth)
        return (this.props.width > this.props.minWidth) ? <WideNav /> : <MobileNav />;
    }
}

export default NavBar;
import React, { Component } from 'react';
import WideNav from '../Containers/wideNav';
import MobileNav from '../Containers/mobileNav';

class NavBar extends Component {
    render() {
        return (this.props.width > this.props.minWidth) ? <WideNav /> : <MobileNav />;
    }
}

export default NavBar;
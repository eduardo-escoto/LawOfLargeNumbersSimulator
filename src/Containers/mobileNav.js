import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'title'
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]} mode="inline" >
                <Menu.Item key="title">Law of Large Numbers <span role="img" aria-label="glitter">✨</span> </Menu.Item>
                <Menu.SubMenu title="Individual Experiments">
                    <Menu.Item key="coin-flip">
                        <Icon type="mail" />Coin Flip
                     </Menu.Item>
                    <Menu.SubMenu title={<span><Icon type="setting" />Assorted Dice</span>}>
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="alipay">
                        Marble Bag
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu >
        );
    }
}

export default MobileNav;
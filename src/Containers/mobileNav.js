import React, { Component } from 'react';
import { Menu } from 'antd';

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'title'
        }
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]} mode="inline" >
                <Menu.Item key="title">Law of Large Numbers <span role="img" aria-label="sparkles">✨</span></Menu.Item>
                <Menu.SubMenu title={<span>Individual Experiments <span role="img" aria-label="robot">🤖</span></span>}>
                    <Menu.Item key="coinFlip">
                        Coin Flip  <span role="img" aria-label="alien">👾</span>
                    </Menu.Item>
                    <Menu.Item key="marbleBag">
                        Marble Bag <span role="img" aria-label="flower">🌸</span>
                    </Menu.Item>
                    <Menu.SubMenu title={<span>Assorted Dice <span role="img" aria-label="diceRoll">🎲</span></span>}>
                        <Menu.Item key={6}>6 Sided Die</Menu.Item>
                        <Menu.Item key={8}>8 Sided Die</Menu.Item>
                        <Menu.Item key={12}>12 Sided Die</Menu.Item>
                        <Menu.Item key={20}>20 Sided Die</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu >
        );
    }
}

export default MobileNav;
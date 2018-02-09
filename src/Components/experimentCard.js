import { Card } from 'antd';
import React, { Component } from 'react';
import ExperimentInnerCard from './experimentInnerCard';

const style = {
    margin: "0px 30px 30px 30px",
    padding: "0px 0px 0px 0px"
};

class ExperimentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0
        }
    }
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    }
    createInnerCards() {
        let innerCards = this.props.data.map((data, index) => {
            if (this.props.arrayForm) {
                return (
                    <ExperimentInnerCard
                        data={data}
                        experimentSubject={this.props.experimentSubjects[index]}
                        experimentType={this.props.experimentType}
                        experimentalYield={this.props.experimentalYield[index]}
                        experimentalYieldNum={this.props.experimentalYieldNum[index]}
                        totalNumber={this.props.trialNumber}
                        key={index}
                    />
                );
            }
            else {
                return (
                    <ExperimentInnerCard
                        data={data}
                        experimentSubject={this.props.experimentSubjects[index]}
                        experimentType={this.props.experimentType}
                        experimentalYield={this.props.experimentalYield}
                        experimentalYieldNum={this.props.experimentalYieldNum}
                        totalNumber={this.props.trialNumber}
                        key={index}
                    />
                );
            }
        });
        return ([...innerCards, innerCards,]);
    }
    createTabList(innerCards) {
        let tabList = this.props.data.map((data, index) => {
            const tab = this.props.experimentSubjects[index];
            const key = index;
            return {
                tab,
                key
            }
        });

        return ([...tabList, { tab: "All Outcomes", key: tabList.length }]);
    }
    render() {
        const innerCards = this.createInnerCards();
        const tabList = this.createTabList(innerCards);
        const title = (
            <span> {this.props.title} < span role="img" aria-label={this.props.emojiName}> {this.props.emoji}</span>
                <div>Trials: {this.props.trialNumber}</div>
            </span>
        );

        return (
            <Card
                style={style}
                title={title}
                tabList={tabList}
                onTabChange={(key) => { this.onTabChange(key, 'key'); }} >
                {innerCards[this.state.key]}
            </Card >
        );
    }
}

export default ExperimentCard;
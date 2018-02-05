import React from 'react';
import CoinFlip from '../Containers/coinFlip';
import SixSidedDie from '../Containers/sixSidedDie';
import EightSidedDie from '../Containers/eightSidedDie';
import TwelveSidedDie from '../Containers/twelveSidedDie';
import TwentySidedDie from '../Containers/twentySidedDie';
import MarbleBag from '../Containers/marbleBag';


function AllExperiments(props) {
    return (
        <div>
            <CoinFlip />
            <MarbleBag />
            <SixSidedDie />
            <EightSidedDie />
            <TwelveSidedDie />
            <TwentySidedDie />
        </div>
    );
}

export default AllExperiments;
import React from 'react';
import CoinFlip from '../Containers/coinFlip';
import SixSidedDie from '../Containers/sixSidedDie';
import EightSidedDie from '../Containers/eightSidedDie';
import TwelveSidedDie from '../Containers/twelveSidedDie';
import TwentySidedDie from '../Containers/twentySidedDie';

function AllExperiments(props) {
    return (
        <div>
            <CoinFlip />
            <SixSidedDie />
            <EightSidedDie />
            <TwelveSidedDie />
            <TwentySidedDie />
        </div>
    );
}

export default AllExperiments;
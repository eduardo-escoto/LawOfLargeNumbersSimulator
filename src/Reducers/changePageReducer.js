import React from 'react';
import CoinFlip from '../Containers/coinFlip';
import SixSidedDie from '../Containers/sixSidedDie';
import EightSidedDie from '../Containers/eightSidedDie';
import TwelveSidedDie from '../Containers/twelveSidedDie';
import TwentySidedDie from '../Containers/twentySidedDie';
import { CHANGE_PAGE } from '../Actions/changePageAction';
import AllExperiments from '../Components/allExperiments';

export const Pages = {
    allExperiments: <AllExperiments />,
    coinFlip: <CoinFlip />,
    sixSidedDie: <SixSidedDie />,
    eightSidedDie: <EightSidedDie />,
    twelveSidedDie: <TwelveSidedDie />,
    twentySidedDie: <TwentySidedDie />
}

const initialState = Pages.allExperiments;

export default function changePageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CHANGE_PAGE: state = payload; break;
        default: state = Object.assign({}, state); break;
    }
    return state;
}
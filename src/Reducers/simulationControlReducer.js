import { PAUSE_SIMULATION, RESET_SIMULATION, START_SIMULATION, UPDATE_SIMULATION } from '../Actions/simulationControlActions';


const initialState = {
    paused: true,
    trialNumber: 0,
    experimentData: {
        coinFlip: [0, 0],
        marbleBag: [0, 0, 0, 0],
        diceRolls: {
            sixSidedDie: [0, 0, 0, 0, 0, 0],
            eightSidedDie: [0, 0, 0, 0, 0, 0, 0, 0],
            twelveSidedDie: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            twentySidedDie: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    }
};



export default function simulationControlReducer(state = initialState, { type, payload }) {
    const resetState = {
        paused: true,
        trialNumber: 0,
        experimentData: {
            coinFlip: [0, 0],
            marbleBag: [0, 0, 0, 0],
            diceRolls: {
                sixSidedDie: [0, 0, 0, 0, 0, 0],
                eightSidedDie: [0, 0, 0, 0, 0, 0, 0, 0],
                twelveSidedDie: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                twentySidedDie: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }
    };
    switch (type) {
        case UPDATE_SIMULATION: state = { ...state, ...payload }; break;
        case START_SIMULATION: state = { ...state, paused: false }; break;
        case PAUSE_SIMULATION: state = { ...state, paused: true }; break;
        case RESET_SIMULATION: state = resetState; break;
        default: state = { ...state }; break;
    }
    return state;
}
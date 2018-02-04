import { PAUSE_SIMULATION, RESET_SIMULATION, START_SIMULATION, UPDATE_SIMULATION } from '../Actions/simulationControlActions';
const initialState = {
    paused: true,
    trialNumber: 0,
    experimentData: {}
}
export default function simulationControlReducer(state = initialState, { type, payload }) {
    switch (type) {
        case UPDATE_SIMULATION: state = { ...state, ...payload }; break;
        case START_SIMULATION: state = { ...state, paused: false }; break;
        case PAUSE_SIMULATION: state = { ...state, paused: true }; break;
        case RESET_SIMULATION: state = initialState; break;
        default: state = { ...state }; break;
    }
    return state;
}
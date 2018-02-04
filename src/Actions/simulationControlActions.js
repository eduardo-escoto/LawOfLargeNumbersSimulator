export const START_SIMULATION = "START_SIMULATION";
export const PAUSE_SIMULATION = "PAUSE_SIMULATION";
export const RESET_SIMULATION = "RESET_SIMULATION";
export const UPDATE_SIMULATION = "UPDATE_SIMULATION";

export const startSimulationAction = {
    type: START_SIMULATION
}

export const pauseSimulationAction = {
    type: PAUSE_SIMULATION
}
export const resetSimulationAction = {
    type: RESET_SIMULATION
}
export function updateSimulationActionCreator(trialNumber, experimentData) {
    return {
        type: UPDATE_SIMULATION,
        payload: { trialNumber, experimentData }
    }
}
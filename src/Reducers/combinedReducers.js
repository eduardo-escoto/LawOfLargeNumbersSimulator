import widthResizeReducer from './widthResizeReducer';
import simulationControlReducer from './simulationControlReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    importantWidths: widthResizeReducer,
    simulationData: simulationControlReducer
});
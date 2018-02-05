import widthResizeReducer from './widthResizeReducer';
import simulationControlReducer from './simulationControlReducer';
import changePageReducer from './changePageReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    importantWidths: widthResizeReducer,
    simulationData: simulationControlReducer,
    currentPage: changePageReducer
});
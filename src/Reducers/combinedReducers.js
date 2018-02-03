import widthResizeReducer from './widthResizeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    importantWidths: widthResizeReducer
});
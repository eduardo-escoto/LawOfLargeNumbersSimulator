import { WIDTH_RESIZE_ACTION } from '../Actions/widthResizeAction';

const initialState = {
    minWidth: 650,
    width: 0
}

export default function widthResizeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case WIDTH_RESIZE_ACTION: state = { ...state, width: payload }; break;
        default: state = { ...state };
    }
    return state;
}
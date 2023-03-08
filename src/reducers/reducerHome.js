import { HOME } from '../actions/actionHome';
import { initialState } from '../constants/initialState';

export const reducerHome = (state = initialState, action) => {
    switch (action.type) {
        case HOME:         
            return { ...state, wrd: action.payload };
        default:
            return state;
    }
}
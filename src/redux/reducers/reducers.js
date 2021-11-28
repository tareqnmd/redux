import { INCREMENT, DECREMENT } from "../actions/actionTypes"

let value;

if (JSON.parse(localStorage.getItem('value'))) {
    value = JSON.parse(localStorage.getItem('value'))
} else {
    value = 0
}

const initialState = {
    value
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log(state, 'increment');
            const incrementValue = state.value + 1;
            localStorage.setItem('value', JSON.stringify(incrementValue));
            return { ...state, value: incrementValue };
        case DECREMENT:
            console.log(state, 'decrement');
            const decrementValue = state.value - 1;
            localStorage.setItem('value', JSON.stringify(decrementValue));
            return { ...state, value: decrementValue };
        default:
            return state;
    }
}

export default reducers;
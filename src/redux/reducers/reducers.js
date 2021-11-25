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
            state.value++;
            localStorage.setItem('value', JSON.stringify(state.value));
            return state;
        case DECREMENT:
            state.value++;
            localStorage.setItem('value', JSON.stringify(state.value))
            return state;
        default:
            return state;
    }
}

export default reducers;
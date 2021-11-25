import { INCREMENT,DECREMENT } from "./actionTypes"

let todo;

if (JSON.parse(localStorage.getItem('todo'))) {
    todo = JSON.parse(localStorage.getItem('todo'))
} else {
    todo = []
}

const initialState = {
    todo: todo
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            const createTodo = {
                name: action.name,
                isActive: true,
                id: new Date().getTime() + Math.floor(Math.random() * 1000)
            }
            const addTodo = [...state.todo, createTodo]
            localStorage.setItem('todo', JSON.stringify(addTodo));
            return {
                ...state, todo: addTodo
            }
        case DECREMENT:
            const remaining = state.todo.filter(todo => todo.id !== action.id);
            localStorage.setItem('todo', JSON.stringify(remaining))
            return {
                ...state, todo: remaining
            }
        default:
            return state;
    }
}

export default reducers;
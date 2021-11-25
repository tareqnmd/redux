import { INCREMENT,DECREMENT } from "./actionTypes"

export const increment = (name) => {
    return {type: INCREMENT, name}
}

export const removeTODO = (id) => {
    return {type: DECREMENT, id}
}

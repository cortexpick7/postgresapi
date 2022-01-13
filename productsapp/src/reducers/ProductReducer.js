import { ACTION_TYPES } from "../actions/productActions";
const innitialState = {
    list: []
}

export const ProductReducer = (state = innitialState, action) => {
    
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.load]
            }
    
        default:
            return state
    }
}
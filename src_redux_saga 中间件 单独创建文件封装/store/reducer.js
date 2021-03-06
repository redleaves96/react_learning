import { CHANGE_INPUE_VALUE , ADD_TODO_VALUE , DELETE_TODO_ITEM} from './actionTypes';


const defaultState = {
    inputValue: '123',
    list: [1, 2]
}


export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUE_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_TODO_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }

    console.log(state, action)
    return state;
}
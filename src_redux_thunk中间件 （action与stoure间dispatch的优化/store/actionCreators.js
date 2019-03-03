import { CHANGE_INPUE_VALUE , ADD_TODO_VALUE ,DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionType";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUE_VALUE,
    value 
});

export const getAddItemAction = () => ({
    type: ADD_TODO_VALUE,
     
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index 
});

export const initLisAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('./list.json').then((res)=>{
            const data = res.data;
            const action = initLisAction(data);
            dispatch(action);
        })
    }
};

import { CHANGE_INPUE_VALUE , ADD_TODO_VALUE ,DELETE_TODO_ITEM } from "./actionType";

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

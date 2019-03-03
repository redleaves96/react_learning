import { GET_INIT_LIST,CHANGE_INPUE_VALUE , ADD_TODO_VALUE ,DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";


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

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getinitList = (data) => ({
    type: GET_INIT_LIST,
    data
});


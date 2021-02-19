import { AddAction, DeleteAction, TODO_ACTIONS, UpdateAction } from './actionTypes';
import { Task } from './reducer';

export const addTask = (params: string): AddAction => {
    return {
        type: TODO_ACTIONS.ADD_TASK,
        payload: params,
    };
};

export const updateTask = (params: Task): UpdateAction => {
    return {
        type: TODO_ACTIONS.UPDATE_TASK,
        payload: params,
    };
};

export const deleteTask = (params: Task): DeleteAction => {
    return {
        type: TODO_ACTIONS.DELETE_TASK,
        payload: params,
    };
};

import {
    AddAction,
    DeleteAction,
    FetchAction,
    FetchSuccessAction,
    FetchFailureAction,
    TodoResponse,
    TODO_ACTIONS,
    CompleteAction,
    EditAction,
} from './actionTypes';

export const addTask = (params: string): AddAction => {
    return {
        type: TODO_ACTIONS.ADD_TASK,
        payload: params,
    };
};

export const completeTask = (id: number): CompleteAction => {
    return {
        type: TODO_ACTIONS.COMPLETE_TASK,
        payload: id,
    };
};

export const editTask = (params: { taskId: number; newTitle: string }): EditAction => {
    return {
        type: TODO_ACTIONS.EDIT_TASK,
        payload: params,
    };
};

export const deleteTask = (id: number): DeleteAction => {
    return {
        type: TODO_ACTIONS.DELETE_TASK,
        payload: id,
    };
};

export const fetch = (): FetchAction => {
    return {
        type: TODO_ACTIONS.FETCH_TODO,
    };
};

export const fetchSuccess = (payload: TodoResponse): FetchSuccessAction => {
    return {
        type: TODO_ACTIONS.FETCH_TODO_SUCCESS,
        payload,
    };
};

export const fetchFailure = (): FetchFailureAction => {
    return {
        type: TODO_ACTIONS.FETCH_TODO_FAILURE,
    };
};

import { Task } from './reducer';

export const TODO_ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    FETCH_TODO: 'FETCH_TODO',
    FETCH_TODO_SUCCESS: 'FETCH_TODO_SUCCESS',
    FETCH_TODO_FAILURE: 'FETCH_TODO_FAILURE',
};

interface TodoResponse {
    data: {
        userId: number;
        id: number;
        completed: boolean;
        title: string;
    }[];
}

interface AddAction {
    type: typeof TODO_ACTIONS.ADD_TASK;
    payload: string;
}

interface UpdateAction {
    type: typeof TODO_ACTIONS.UPDATE_TASK;
    payload: Task;
}

interface DeleteAction {
    type: typeof TODO_ACTIONS.DELETE_TASK;
    payload: Task;
}

interface FetchAction {
    type: typeof TODO_ACTIONS.FETCH_TODO;
}

interface FetchSuccessAction {
    type: typeof TODO_ACTIONS.FETCH_TODO;
    payload: TodoResponse;
}

interface FetchFailureAction {
    type: typeof TODO_ACTIONS.FETCH_TODO;
}

export type {
    AddAction,
    UpdateAction,
    DeleteAction,
    FetchAction,
    FetchSuccessAction,
    FetchFailureAction,
    TodoResponse,
};

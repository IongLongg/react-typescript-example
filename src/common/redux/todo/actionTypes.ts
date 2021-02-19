export const TODO_ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    EDIT_TASK: 'EDIT_TASK',
    FETCH_TODO: 'FETCH_TODO',
    FETCH_TODO_SUCCESS: 'FETCH_TODO_SUCCESS',
    FETCH_TODO_FAILURE: 'FETCH_TODO_FAILURE',
};

interface EditTaskParams {
    taskId: number;
    newTitle: string;
}

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

interface CompleteAction {
    type: typeof TODO_ACTIONS.COMPLETE_TASK;
    payload: number;
}

interface EditAction {
    type: typeof TODO_ACTIONS.EDIT_TASK;
    payload: EditTaskParams;
}

interface DeleteAction {
    type: typeof TODO_ACTIONS.DELETE_TASK;
    payload: number;
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
    CompleteAction,
    EditAction,
    DeleteAction,
    FetchAction,
    FetchSuccessAction,
    FetchFailureAction,
    TodoResponse,
};

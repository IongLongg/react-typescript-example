import { TODO_ACTIONS } from './actionTypes';

export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface TodoState {
    list: Task[];
}

const initialState: TodoState = {
    list: [],
};

const reducer = (state = initialState, action: any): TodoState => {
    let taskId: number;
    switch (action.type) {
        case TODO_ACTIONS.ADD_TASK:
            const newTask = {
                id: state.list.length ? state.list[state.list.length - 1].id + 1 : 1,
                title: action.payload,
                isCompleted: false,
            };
            return {
                ...state,
                list: [...state.list, newTask],
            };
        case TODO_ACTIONS.UPDATE_TASK:
            taskId = state.list.indexOf(action.payload);
            const updatedTask = {
                ...action.payload,
                isCompleted: !action.payload.isCompleted,
            };
            return {
                ...state,
                list: [...state.list.slice(0, taskId), updatedTask, ...state.list.slice(taskId + 1)],
            };
        case TODO_ACTIONS.DELETE_TASK:
            taskId = state.list.indexOf(action.payload);
            return {
                ...state,
                list: [...state.list.slice(0, taskId), ...state.list.slice(taskId + 1)],
            };
        default:
            return state;
    }
};

export default reducer;

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
    let newList: Task[];

    switch (action.type) {
        case TODO_ACTIONS.ADD_TASK:
            const newTask = {
                id: new Date().getTime(),
                title: action.payload,
                isCompleted: false,
            };
            return {
                ...state,
                list: [...state.list, newTask],
            };
        case TODO_ACTIONS.COMPLETE_TASK:
            taskId = state.list.findIndex((item) => item.id === action.payload);
            newList = [...state.list];
            newList[taskId].isCompleted = !newList[taskId].isCompleted;
            return {
                ...state,
                list: [...newList],
            };
        case TODO_ACTIONS.EDIT_TASK:
            newList = [...state.list];
            taskId = state.list.findIndex((item) => item.id === action.payload.taskId);
            newList[taskId].title = action.payload.newTitle;
            return {
                ...state,
                list: [...newList],
            };
        case TODO_ACTIONS.DELETE_TASK:
            newList = state.list.filter((item) => item.id !== action.payload);
            return {
                ...state,
                list: [...newList],
            };
        default:
            return state;
    }
};

export default reducer;

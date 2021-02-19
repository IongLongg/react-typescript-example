import { put, takeEvery } from 'redux-saga/effects';

import { addTask, deleteTask, updateTask } from './actions';
import { AddAction, DeleteAction, TODO_ACTIONS, UpdateAction } from './actionTypes';

function* addSaga(action: AddAction) {
    yield put(addTask(action.payload));
}

function* updateSaga(action: UpdateAction) {
    yield put(updateTask(action.payload));
}

function* deleteSaga(action: DeleteAction) {
    yield put(deleteTask(action.payload));
}

function* watchAll() {
    yield takeEvery(TODO_ACTIONS.ADD_TASK, addSaga);
    yield takeEvery(TODO_ACTIONS.UPDATE_TASK, updateSaga);
    yield takeEvery(TODO_ACTIONS.DELETE_TASK, deleteSaga);
}

export default watchAll();

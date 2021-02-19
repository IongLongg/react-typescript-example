import { put, takeEvery } from 'redux-saga/effects';

import { addTask, deleteTask, editTask, completeTask } from './actions';
import { AddAction, DeleteAction, EditAction, TODO_ACTIONS, CompleteAction } from './actionTypes';

function* addSaga(action: AddAction) {
    yield put(addTask(action.payload));
}

function* completeSaga(action: CompleteAction) {
    yield put(completeTask(action.payload));
}

function* deleteSaga(action: DeleteAction) {
    yield put(deleteTask(action.payload));
}

function* editSaga(action: EditAction) {
    yield put(editTask(action.payload));
}

function* watchAll() {
    yield takeEvery(TODO_ACTIONS.ADD_TASK, addSaga);
    yield takeEvery(TODO_ACTIONS.COMPLETE_TASK, completeSaga);
    yield takeEvery(TODO_ACTIONS.DELETE_TASK, deleteSaga);
    yield takeEvery(TODO_ACTIONS.EDIT_TASK, editSaga);
}

export default watchAll();

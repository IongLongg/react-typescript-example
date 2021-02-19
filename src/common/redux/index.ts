import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Import all reducers here
import authReducer, { AuthState } from './auth/reducer';
import todoReducer, { TodoState } from './todo/reducer';
// Import all sagas here
import authSagas from './auth/sagas';

export interface GlobalState {
    auth: AuthState;
    todo: TodoState;
}

export const combinedReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
});

export const rootSaga = function* (): any {
    yield all([authSagas]);
};

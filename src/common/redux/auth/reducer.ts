import { AUTH_ACTIONS, LoginResponse } from './actionTypes';

export interface AuthState {
    jwtToken: string;
    user: LoginResponse;
}

const initialState: AuthState = {
    jwtToken: '',
    user: { email: '', token: '' },
};

const reducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN:
            return { ...state };
        case AUTH_ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case AUTH_ACTIONS.LOGIN_FAILURE:
            return { ...state };
        default:
            return state;
    }
};

export default reducer;

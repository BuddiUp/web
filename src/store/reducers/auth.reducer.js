import {
    AUTH_START,
    AUTH_SUCCESS,
    FETCH_USER,
    AUTH_FAIL,
    AUTH_LOGOUT
} from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    token: null,
    user: {},
    error: null,
    loading: false
};

/* eslint-disable */
const authStart = (state) => updateObject(state, { error: null, loading: true });

const authSuccess = (state, action) =>
    updateObject(state, {
        token: action.payload.token,
        user: action.payload.user,
        error: null,
        loading: false
    });

const fetchUser = (state, action) =>
    updateObject(state, {
        token: localStorage.getItem('token'),
        user: action.payload,
        error: null
    });

const authFail = (state, action) =>
    updateObject(state, { error: action.payload, loading: false });

const authLogout = (state) => updateObject(state, INIT_STATE);
/* eslint-enable */

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case AUTH_START:
            return authStart(state, action);
        case AUTH_SUCCESS:
            return authSuccess(state, action);
        case FETCH_USER:
            return fetchUser(state, action);
        case AUTH_FAIL:
            return authFail(state, action);
        case AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
};

export default authReducer;

import buddiup from '../../apis/buddiup';
import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT,
    FETCH_USER
} from './action.types';
import history from '../../history';

export const authStart = () => {
    return { type: AUTH_START };
};

export const authSuccess = (data) => {
    return { type: AUTH_SUCCESS, payload: data };
};

export const fetchUser = (data) => {
    return { type: FETCH_USER, payload: data };
};

export const authFail = (error) => {
    return { type: AUTH_FAIL, payload: error };
};

export const authLogout = () => {
    localStorage.removeItem('token');
    return { type: AUTH_LOGOUT };
};

export const authCheck = () => (dispatch) => {
    const USER_TOKEN = localStorage.getItem('token');
    if (!USER_TOKEN) {
        dispatch(authLogout());
    } else {
        const CONFIG = {
            headers: {
                Authorization: `Token ${USER_TOKEN}`
            }
        };

        buddiup
            .get('/api/auth/user', CONFIG)
            .then((res) => {
                dispatch(fetchUser(res.data));
            })
            .catch((err) => {
                dispatch(authFail(err));
            });
    }
};

export const authSignUp = (userData) => (dispatch) => {
    dispatch(authStart());
    const CONFIG = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    buddiup
        .post('/api/auth/register', userData, CONFIG)
        .then((res) => {
            const USER_TOKEN = res.data.token;
            localStorage.setItem('token', USER_TOKEN);
            dispatch(authSuccess(res.data));
            history.push('/');
        })
        .catch((err) => {
            dispatch(authFail(err));
        });
};

export const authLogin = (userData) => (dispatch) => {
    dispatch(authStart());

    buddiup
        .post('/api/auth/login', userData)
        .then((res) => {
            const USER_TOKEN = res.data.token;
            localStorage.setItem('token', USER_TOKEN);
            dispatch(authSuccess(res.data));
            history.push('/');
        })
        .catch((error) => {
            dispatch(authFail(error));
        });
};

import buddiup from '../../apis/buddiup';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './action.types';
import history from '../../history';

export const authStart = () => {
    return { type: AUTH_START };
};

export const authSucces = (token) => {
    return { type: AUTH_SUCCESS, payload: token };
};

export const authFail = (error) => {
    return { type: AUTH_FAIL, payload: error };
};

export const authLogout = () => {
    localStorage.removeItem('token');
    return { type: AUTH_LOGOUT };
};

export const authCheck = () => (dispatch) => {
    const userToken = localStorage.getItem('token');

    if (!userToken) {
        dispatch(authLogout());
    }
    dispatch(authSucces(userToken));
};

export const authSignUp = (userData) => (dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };
    dispatch(authStart());
    buddiup
        .post('/api/auth/register', userData, config)
        .then((res) => {
            const userToken = res.data.token;
            localStorage.setItem('token', userToken);
            dispatch(authSucces(userToken));
        })
        .catch((err) => {
            dispatch(authFail(err));
            console.log(`Sign up error: ${err}`);
        });
};

export const authLogin = (userData) => (dispatch) => {
    dispatch(authStart());
    buddiup
        .post('/api/auth/login', userData)
        .then((res) => {
            const userToken = res.data.token;
            localStorage.setItem('token', userToken);
            console.log(`Logged in: ${JSON.stringify(res.data, null, 2)}`);
            dispatch(authSucces(userToken));
            history.push('/');
        })
        .catch((error) => {
            dispatch(authFail(error));
        });
};

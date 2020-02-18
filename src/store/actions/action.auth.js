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

export const authSucces = (data) => {
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
    const userToken = localStorage.getItem('token');
    if (!userToken) {
        dispatch(authLogout());
    } else {
        const config = {
            headers: {
                Authorization: `Token ${userToken}`
            }
        };
        buddiup
            .get('/api/auth/user', config)
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
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    buddiup
        .post('/api/auth/register', userData, config)
        .then((res) => {
            const userToken = res.data.token;
            localStorage.setItem('token', userToken);
            dispatch(authSucces(res.data));
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
            const userToken = res.data.token;
            localStorage.setItem('token', userToken);
            dispatch(authSucces(res.data));
            history.push('/');
        })
        .catch((error) => {
            dispatch(authFail(error));
        });
};

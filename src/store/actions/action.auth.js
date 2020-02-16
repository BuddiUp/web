import buddiup from '../../apis/buddiup';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './action.types';

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
    return { type: AUTH_LOGOUT };
};

export const authSignUp = (userData) => (dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };

    dispatch(authStart());
    console.log('Auth Signup fired');
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

// export const authLogin = (userData) => (dispatch) => {
//     buddiup.post('/api/auth/login', userData).then((res) => {});
// };

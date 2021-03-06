import buddiup from '../../apis/buddiup';
import {
    DISCOVER_START,
    DISCOVER_FAIL,
    DISCOVER_NEAR,
    DISCOVER_ALL
} from './action.types';

export const discoverStart = () => {
    return { type: DISCOVER_START };
};

export const discoverFail = (err) => {
    return { type: DISCOVER_FAIL, payload: err };
};

export const fetchNear = (data) => {
    return { type: DISCOVER_NEAR, payload: data };
};

export const fetchAll = (data) => {
    return { type: DISCOVER_ALL, payload: data };
};

export const discoverNear = (userData) => (dispatch) => {
    dispatch(discoverStart());

    const USER_TOKEN = localStorage.getItem('token');
    const DISCOVER_SETTINGS = {
        ...userData,
        random_users: true
    };

    const CONFIG = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${USER_TOKEN}`
        }
    };

    // TODO: MAKE ASYNC
    buddiup
        .post('/api/auth/search', DISCOVER_SETTINGS, CONFIG)
        .then((res) => {
            dispatch(fetchNear(res.data));
        })
        .catch((err) => {
            dispatch(discoverFail(err));
        });
};

export const viewAll = (userData) => (dispatch) => {
    dispatch(discoverStart());

    const USER_TOKEN = localStorage.getItem('token');
    // TODO: Make max_radius changable
    const DISCOVER_SETTINGS = {
        ...userData,
        max_radius: 50,
        random_users: true
    };

    const CONFIG = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${USER_TOKEN}`
        }
    };

    // TODO: MAKE ASYNC
    buddiup
        .post('/api/auth/search', DISCOVER_SETTINGS, CONFIG)
        .then((res) => {
            dispatch(fetchAll(res.data));
        })
        .catch((err) => {
            dispatch(discoverFail(err));
        });
};

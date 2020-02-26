import buddiup from '../../apis/buddiup';
import {
    DISCOVER_START,
    DISCOVER_FAIL,
    DISCOVER_NEAR,
    DISCOVER_NEW
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

export const fetchNew = (data) => {
    return { type: DISCOVER_NEW, payload: data };
};

export const discoverNear = (userData) => (dispatch) => {
    dispatch(discoverStart());

    const USER_TOKEN = localStorage.getItem('token');
    const CONFIG = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${USER_TOKEN}`
        }
    };

    buddiup
        .post('/api/auth/search/REMOVEME', userData, CONFIG)
        .then((res) => {
            dispatch(fetchNear(res.data.userProfiles));
        })
        .catch((err) => {
            dispatch(discoverFail(err));
        });
};

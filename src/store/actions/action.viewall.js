import buddiup from '../../apis/buddiup';
import { VIEWALL_START, VIEWALL_FETCH, VIEWALL_FAIL } from './action.types';

export const viewAllStart = () => {
    return { type: VIEWALL_START };
};

export const viewAllFetch = (data) => {
    return { type: VIEWALL_FETCH, payload: data };
};

export const viewAllFail = (err) => {
    return { type: VIEWALL_FAIL, payload: err };
};

export const viewAll = (userData) => (dispatch) => {
    dispatch(viewAllStart());

    const USER_TOKEN = localStorage.getItem('token');
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
            dispatch(viewAllFetch(res.data.userProfiles));
        })
        .catch((err) => {
            dispatch(viewAllFail(err));
        });
};


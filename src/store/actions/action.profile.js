import buddiup from '../../apis/buddiup';
import { PROFILE_FAIL, PROFILE_FETCH } from './action.types';

export const profileFail = (error) => {
    return { type: PROFILE_FAIL, payload: error };
};

export const profileFetch = (data) => {
    return { type: PROFILE_FETCH, payload: data };
};

export const fetchProfile = (userUUID) => (dispatch) => {
    buddiup
        .get(`/user/?userid=${userUUID}`)
        .then((res) => {
            dispatch(profileFetch(res.data.user));
        })
        .catch((err) => {
            // TODO: Handle error with component
            dispatch(profileFail(err));
        });
};

import buddiup from '../../apis/buddiup';
import { PROFILE_START, PROFILE_FAIL, PROFILE_FETCH } from './action.types';

export const profileStart = () => {
    return { type: PROFILE_START };
};

export const profileFail = (error) => {
    return { type: PROFILE_FAIL, payload: error };
};

export const profileFetch = (data) => {
    return { type: PROFILE_FETCH, payload: data };
};

export const fetchProfile = (userUUID) => (dispatch) => {
    dispatch(profileStart());

    buddiup
        .get(`/user/?userid=${userUUID}`)
        .then((res) => {
            dispatch(profileFetch(res.data.user));
            console.log(res.data.user);
        })
        .catch((err) => {
            // TODO: Handle error with component
            dispatch(profileFail());
            console.log(`There was an error ${err}`);
        });
};

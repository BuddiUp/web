import updateObject from './updateObject';
import { PROFILE_START, PROFILE_FAIL, PROFILE_FETCH } from '../actions/action.types';

const INIT_STATE = {
    user: {},
    error: null,
    loading: false
};

const profileStart = (state) => updateObject(state, { error: null, loading: true });

const profileFail = (state, action) =>
    updateObject(state, { error: action.payload, loading: false });

const profileFetch = (state, action) =>
    updateObject(state, { user: action.payload, error: null, loading: false });

const profileReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case PROFILE_START:
            return profileStart(state);
        case PROFILE_FAIL:
            return profileFail(state, action);
        case PROFILE_FETCH:
            return profileFetch(state, action);
        default:
            return state;
    }
};

export default profileReducer;

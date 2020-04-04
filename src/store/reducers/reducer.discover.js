import {
    DISCOVER_START,
    DISCOVER_FAIL,
    DISCOVER_NEAR,
    DISCOVER_ALL
} from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    usersNear: {},
    allUsers: {},
    default_image: '',
    error: null,
    loading: false
};

const discoverStart = (state) =>
    updateObject(state, {
        error: null,
        loading: true
    });

const discoverFail = (state, action) =>
    updateObject(state, {
        error: action.payload,
        loading: false
    });

const discoverNear = (state, action) =>
    updateObject(state, {
        usersNear: action.payload.userProfiles,
        default_image: action.payload.default_image,
        error: null,
        loading: false
    });

const discoverAll = (state, action) =>
    updateObject(state, {
        allUsers: action.payload.userProfiles,
        default_image: action.payload.default_image,
        error: null,
        loading: false
    });

const discoverReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case DISCOVER_START:
            return discoverStart(state);
        case DISCOVER_FAIL:
            return discoverFail(state, action);
        case DISCOVER_NEAR:
            return discoverNear(state, action);
        case DISCOVER_ALL:
            return discoverAll(state, action);
        default:
            return state;
    }
};

export default discoverReducer;

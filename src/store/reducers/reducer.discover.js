import {
    DISCOVER_START,
    DISCOVER_FAIL,
    DISCOVER_NEAR,
    DISCOVER_NEW
} from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    userProfiles: {},
    error: null,
    loading: false
};

const discoverStart = (state) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const discoverFail = (state, action) => {
    return updateObject(state, {
        error: action.payload,
        loading: false
    });
};

const discoverNear = (state, action) => {
    return updateObject(state, {
        userProfiles: action.payload,
        error: null,
        loading: false
    });
};

// TODO
const discoverNew = (state, action) => {
    return updateObject(state, {});
};

const discoverReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case DISCOVER_START:
            return discoverStart(state);
        case DISCOVER_FAIL:
            return discoverFail(state, action);
        case DISCOVER_NEAR:
            return discoverNear(state, action);
        case DISCOVER_NEW:
            return discoverNew(state, action);
        default:
            return state;
    }
};

export default discoverReducer;

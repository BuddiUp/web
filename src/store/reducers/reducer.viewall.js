import { VIEWALL_FETCH, VIEWALL_FAIL, VIEWALL_START } from '../actions/action.types';
import updateObject from './updateObject';

const INIT_STATE = {
    userProfiles: [],
    error: null,
    loading: false
};

const viewAllStart = (state) => updateObject(state, { error: null, loading: true });

const viewAllFetch = (state, action) =>
    updateObject(state, { userProfiles: action.payload, loading: false, error: null });

const viewAllError = (state, action) =>
    updateObject(state, { loading: false, error: action.payload });

const viewAllReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case VIEWALL_START:
            return viewAllStart(state);
        case VIEWALL_FETCH:
            return viewAllFetch(state, action);
        case VIEWALL_FAIL:
            return viewAllError(state, action);
        default:
            return state;
    }
};

export default viewAllReducer;

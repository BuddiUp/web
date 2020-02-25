import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducer.auth';
import discoverReducer from './reducer.discover';

// Persists the redux store depending on what's whitelisted
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer']
};

const rootReducer = combineReducers({
    authReducer,
    discoverReducer
});

export default persistReducer(persistConfig, rootReducer);

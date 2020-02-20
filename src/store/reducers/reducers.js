import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth.reducer';

// Persists the redux store depending on what's whitelisted
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer']
};

const rootReducer = combineReducers({
    authReducer
});

export default persistReducer(persistConfig, rootReducer);

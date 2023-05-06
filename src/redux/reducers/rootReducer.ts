import { combineReducers } from 'redux';
import authReducer from './authReducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

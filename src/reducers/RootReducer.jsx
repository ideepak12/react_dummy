import { combineReducers } from 'redux';
import users from './LoginReducer';

const RootReducer = combineReducers({
  users
});

export default RootReducer;

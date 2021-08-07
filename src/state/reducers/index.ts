import { combineReducers } from 'redux';
import setsReducer from './SetReducers'

const RootReducer = combineReducers({
  setsReducer
});

export default RootReducer;
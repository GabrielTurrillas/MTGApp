import { combineReducers } from 'redux';
import setsReducer from './SetsReducers'

const RootReducer = combineReducers({
  setsReducer
});

export default RootReducer;
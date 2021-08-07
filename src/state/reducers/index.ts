import { combineReducers } from 'redux';
import setsReducer from './SetsReducers'
import cardsReducer from './CardsReducers';

const RootReducer = combineReducers({
  setsReducer,
  cardsReducer
});

export default RootReducer;
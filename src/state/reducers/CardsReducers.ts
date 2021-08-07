import { CardsAction, CardsType, HeadersType } from '../actions';
import { cardsActionTypes } from '../action-types';

export interface DefaultStateI {
  loading: boolean,
  cards?: CardsType
  headers?: HeadersType
};

const defaultState: DefaultStateI = {
  loading: false
};

const cardsReducer = (state: DefaultStateI = defaultState, action: CardsAction): DefaultStateI => {
  switch (action.type) {
    case cardsActionTypes.CARDS_LOADING:
      return {
        loading: true,
      };
    case cardsActionTypes.CARDS_FAIL:
      return {
        loading: false,
      };
    case cardsActionTypes.CARDS_SUCCESS:
      return {
        loading: false,
        cards: action.payload,
        headers: action.headers
      };
    default:
      return state
  };
};

export default cardsReducer;
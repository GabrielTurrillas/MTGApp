import { cardsActionTypes } from "../action-types";

export type CardsType = {
  cards: SingleCardType[]
};

export type SingleCardType = {
  name: string
};

interface CardsLoadingAction {
  type: cardsActionTypes.CARDS_LOADING
};

interface CardsFailAction {
  type: cardsActionTypes.CARDS_FAIL
};

interface CardsSuccessAction {
  type: cardsActionTypes.CARDS_SUCCESS
  payload: {
    cards: SingleCardType[]
  };
};

export type CardsAction = CardsLoadingAction | CardsFailAction | CardsSuccessAction


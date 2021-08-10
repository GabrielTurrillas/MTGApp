import { cardsActionTypes } from "../action-types";

export type CardsType = {
  cards: SingleCardType[]
};

export type HeadersType = {
  count: number
  "total-count": number
};

export type SingleCardType = {
  id: string
  name: string
  imageUrl: string
  manaCost: string
  type: string
  rarity: string
  artist: string
  originalText: string
};

interface CardsLoadingAction {
  type: typeof cardsActionTypes.CARDS_LOADING
};

interface CardsFailAction {
  type: typeof cardsActionTypes.CARDS_FAIL
};

interface CardsSuccessAction {
  type: typeof cardsActionTypes.CARDS_SUCCESS
  payload: CardsType
  headers: HeadersType
};

export type CardsAction = CardsLoadingAction | CardsFailAction | CardsSuccessAction


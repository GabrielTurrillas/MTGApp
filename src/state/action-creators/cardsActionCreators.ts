import axios from 'axios';
import { Dispatch } from 'redux';
import { CardsAction } from '../actions'
import { cardsActionTypes } from '../action-types'

export const getAllSetCards = (set: string, page: number = 1) => async (dispatch: Dispatch<CardsAction>) => {
  try {
    dispatch({
      type: cardsActionTypes.CARDS_LOADING
    });
    const res = await axios.get(`https://api.magicthegathering.io/v1/cards?set=${set}&page=${page}`)
    dispatch({
      type: cardsActionTypes.CARDS_SUCCESS,
      payload: res.data,
      headers: res.headers
    });
  } catch (e) {
    dispatch({
      type: cardsActionTypes.CARDS_FAIL
    });
  }
}
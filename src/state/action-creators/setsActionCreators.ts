import axios from 'axios'
import { Dispatch } from 'redux'
import { setActionTypes } from '../action-types/SetsTypes'
import { setAction } from '../actions'

export const getAllSets = () => async (dispatch: Dispatch<setAction.Action>) => {
  try {
    dispatch({
      type: setActionTypes.SETS_LOADING
    });
    const res = await axios.get(`https://api.magicthegathering.io/v1/sets/`)
    dispatch({
      type: setActionTypes.SETS_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: setActionTypes.SETS_FAIL
    })
  }
}

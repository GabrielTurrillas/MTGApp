import { setActionTypes } from '../action-types/SetsTypes'
import { setAction } from '../actions'
//import { Action, SetsType } from '../actions'

export interface DefaultStateI {
  loading: boolean,
  sets?: setAction.SetsType,
};

const defaultState: DefaultStateI = {
  loading: false,
};

const setsReducer = (state: DefaultStateI = defaultState, action: setAction.Action): DefaultStateI => {
  switch (action.type) {
    case setActionTypes.SETS_FAIL:
      return {
        loading: false,
      }
    case setActionTypes.SETS_LOADING:
      return {
        loading: true
      }
    case setActionTypes.SETS_SUCCESS:
      return {
        loading: false,
        sets: action.payload
      }
    default:
      return state
  }
}

export default setsReducer
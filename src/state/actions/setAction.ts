import { setActionTypes } from '../action-types/SetsTypes'

export type SetsType = {
  sets: SingleSetType[]
}

export type SingleSetType = {
  name: string
  code: string
}

interface SetsLoadingAction {
  type: typeof setActionTypes.SETS_LOADING
}

interface SetsFailAction {
  type: typeof setActionTypes.SETS_FAIL
}

interface SetsSuccessAction {
  type: typeof setActionTypes.SETS_SUCCESS
  payload: {
    sets: SingleSetType[]
  }
}

export type Action = SetsLoadingAction | SetsFailAction | SetsSuccessAction
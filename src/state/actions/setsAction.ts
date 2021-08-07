import { setActionTypes } from '../action-types';

export type SetsType = {
  sets: SingleSetType[]
};

export type SingleSetType = {
  name: string
  code: string
};

interface SetsLoadingAction {
  type: typeof setActionTypes.SETS_LOADING
};

interface SetsFailAction {
  type: typeof setActionTypes.SETS_FAIL
};

interface SetsSuccessAction {
  type: typeof setActionTypes.SETS_SUCCESS
  payload: {
    sets: SingleSetType[]
  };
};

export type SetsAction = SetsLoadingAction | SetsFailAction | SetsSuccessAction;
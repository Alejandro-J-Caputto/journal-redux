import types from '../redux/types/types';


export interface UIInitialState {
  loading: boolean,
  msgError: null
}

export type ErrorUiAction = {
  type: typeof types.uiSetError | typeof types.uiRemoveError,
  payload: any
} 

export type ErrorDispatch = (err?:any) => ErrorUiAction;
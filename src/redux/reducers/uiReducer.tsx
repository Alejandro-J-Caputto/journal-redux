import { ErrorUiAction } from "../../interfaces/ui.interface";
import types from "../types/types";

export const initialState = {
  loading: false,
  msgError: null,
  notificationDisplayed: false,
  notificationContent: {
    text: '',
    icon: ''
  },

}


export const uiReducer = (state: typeof initialState = initialState, action: ErrorUiAction) => {
  switch (action.type) {
    case types.uiSetError:
        return {
          ...state,
          msgError: action.payload
        }

    case types.uiRemoveError:
        return {
          ...state,
          msgError: null
        }
    case types.uiDisplayNotification:
        return {
          ...state,
          notificationDisplayed: action.payload
        }
    case types.uiHideNotification:
        return {
          ...state,
          notificationDisplayed: action.payload
        }
    case types.uiSetNotificationContent:
        return {
          ...state,
          notificationContent: {
            text: action.payload.text,
            icon: action.payload.icon
          }
        }

    default:
      return state;
  }
}
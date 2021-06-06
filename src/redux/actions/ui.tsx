import { ErrorDispatch } from "../../interfaces/ui.interface";
import types from '../types/types';

export const setErrorAction:ErrorDispatch = (err) => ({
  type: types.uiSetError,
  payload: err
})

export const removeErrorAction:ErrorDispatch = () => ({
  type: types.uiRemoveError,
  payload: null
})

export const displayNotificacionAction = () => ({
  type: types.uiDisplayNotification,
  payload: true
})

export const hideNotificationAction = () => ({
  type: types.uiHideNotification,
  payload: false
})

export const setNotificationContent = (notificationOpts:{text: string, icon:string}) => ({
  type: types.uiSetNotificationContent,
  payload: notificationOpts
})
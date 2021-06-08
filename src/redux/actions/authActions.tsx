import types from "../types/types"
import { firebase } from '../../firebase/firebaseConfig'
import { loginDispatch, RegisterFormType } from '../../interfaces/login.interface';
import { Dispatch } from "redux";
import { displayNotificacionAction, setNotificationContent, hideNotificationAction } from './ui';
import { NOTIFICATION_OPTS } from '../../utils/notificationIconHandler';
import { logoutCleaning } from "./notesActions";

export const loginAsync = (email: string, password: string) => {

  return (dispatch: Dispatch) => {
    dispatch(displayNotificacionAction())
    dispatch(setNotificationContent(NOTIFICATION_OPTS('Loading').loading))
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        dispatch(login(user?.uid!, user?.displayName!))
        dispatch(setNotificationContent(NOTIFICATION_OPTS().login))
      }).catch(err => {
        dispatch(displayNotificacionAction())
        dispatch(setNotificationContent(NOTIFICATION_OPTS(err.message).error))
        setTimeout(() => {
          dispatch(hideNotificationAction())
        }, 2500)
      })
    setTimeout(() => {

      dispatch(hideNotificationAction())
    }, 2500);
  }
}

export const registerAsync = (formData: RegisterFormType) => {
  const { name, password, email } = formData;
  return (dispatch: Dispatch) => {
    dispatch(setNotificationContent(NOTIFICATION_OPTS('Loading').loading))
    dispatch(displayNotificacionAction())
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user?.updateProfile({ displayName: name });
        dispatch(login(user?.uid!, user?.displayName!))
        dispatch(hideNotificationAction())
      }).catch(err => {
        dispatch(displayNotificacionAction())
        dispatch(setNotificationContent(NOTIFICATION_OPTS(err.message).error))
        setTimeout(() => {
          dispatch(hideNotificationAction())
        }, 2500)
      })
    setTimeout(() => {
      dispatch(hideNotificationAction())
    }, 2500);
  }
}

export const login: loginDispatch = (uid, name) => ({
  type: types.login,
  payload: {
    uid,
    name
  }
})


export const startLogout = () => {
  return async (dispatch: Dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
    dispatch(logoutCleaning());
  }
}


export const logout = () => ({
  type: types.logout
})




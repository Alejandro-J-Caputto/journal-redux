import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { LoginForm } from '../components/forms/LoginForm'
import { RegisterForm } from '../components/forms/RegisterForm'
import { NotificationUI } from '../components/UI/NotificationUI'
import { RootState } from '../redux/store/store';

export const Authorization = () => {
  const notificationState = useSelector((state:RootState) => state.ui);
  const {notificationDisplayed} = notificationState;
  return (
    <div className="section__auth">
      {notificationDisplayed && <NotificationUI/>}
      <Route path="/auth/login">
        <LoginForm/>
      </Route>
      <Route path="/auth/register">
        <RegisterForm/>
      </Route>
    </div>
  )
}

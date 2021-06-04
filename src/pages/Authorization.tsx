import React from 'react'
import { Route } from 'react-router-dom'
import { LoginForm } from '../components/forms/LoginForm'
import { RegisterForm } from '../components/forms/RegisterForm'

export const Authorization = () => {
  return (
    <div className="section__auth">
      <Route path="/auth/login">
        <LoginForm/>
      </Route>
      <Route path="/auth/register">
        <RegisterForm/>
      </Route>
    </div>
  )
}

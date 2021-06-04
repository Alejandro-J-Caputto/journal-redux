import React from 'react'
import useInput from '../../hooks/useInput'
import { Validatable } from '../../interfaces/validatable.interface'



export const LoginForm = () => {
  const passwordOpts: Validatable = {
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const emailOpts: Validatable = {
    required: true,
    type: 'email',
    min: 3
  }

  const {
    value: password,
    isValid: passwordIsValid,
    containsError: passwordContainsError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword
  } = useInput(passwordOpts);
  const {
    value: email,
    isValid: emailIsValid,
    containsError: emailContainsError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(emailOpts);

  let formIsValid = false;
  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log('form correct')
    console.log(email, password);
    resetPassword();
    resetEmail();
  }



  return (
    <div className="auth-card">
      <form
        autoComplete='off'
        className="auth-card__form"
        onSubmit={submitHandler}>
        <h2 className="heading-secondary u-margin-bottom-small u-margin-top">
          Journal Redux App
        </h2>
        <div className="auth-card__form__group">
          <input
            className={`auth-card__form__input`}
            type='email'
            name='email'
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder='Email Adress'
            id='email'
          />
          <label htmlFor="email" className="auth-card__form__label">Email Address</label>
        </div>
        <div className="auth-card__form__group">
          <input
            className={`auth-card__form__input`}
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder='Password'
            id='password'
            name='password'
          />
          <label htmlFor="password" className="auth-card__form__label">Password</label>
        </div>
        <div className="auth-card__form__group">
          <button disabled={!formIsValid} className="btn btn--red" type="submit"> Log in </button>
        </div>
      </form>
      <div className="auth-card__icon-box log">
        <i className="fab fa-react auth-card__icon"></i>
      </div>
    </div>
  )
}

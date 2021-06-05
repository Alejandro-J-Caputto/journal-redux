import React from 'react'
import { NavLink } from 'react-router-dom'
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
    value: email,
    isValid: emailIsValid,
    containsError: emailContainsError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    focusError: focusErrorEmail

  } = useInput(emailOpts);
  const {
    value: password,
    isValid: passwordIsValid,
    containsError: passwordContainsError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
    focusError: focusErrorPassword
  } = useInput(passwordOpts);

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

  const emailInputClasses = emailContainsError && 'auth__error--input';
  const passwordInputClasses = passwordContainsError && 'auth__error--input';


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
            className={`auth-card__form__input ${emailInputClasses}`}
            type='email'
            name='email'
            value={email}
            onFocus={focusErrorEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder='Email Adress'
            id='email'
          />
          <label htmlFor="email" className="auth-card__form__label">Email Address</label>
          {emailContainsError && <p className="error-text"> Please provide a valid email </p>}
        </div>
        <div className="auth-card__form__group">
          <input
            className={`auth-card__form__input ${passwordInputClasses}`}
            type="password"
            value={password}
            onFocus={focusErrorPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder='Password'
            id='password'
            name='password'
          />
          <label htmlFor="password" className="auth-card__form__label">Password</label>
          {passwordContainsError && <p className="error-text"> Please provide a valid password </p>}

        </div>
        <div className="auth-card__form__group">
          <button disabled={!formIsValid} className="btn btn--red" type="submit"> Log in </button>
        </div>
        <div className="auth-card__form__group u-margin-bottom-small authLink">
          <p className="paragraph u-center-text">Don't you have an account?
          </p>
          <NavLink activeClassName="spanStyle" to="/auth/register" className="paragraph u-center-text"> Register Now </NavLink>

        </div>
      </form>
      <div className="auth-card__icon-box log">
        <i className="fab fa-react auth-card__icon"></i>
      </div>
    </div>
  )
}

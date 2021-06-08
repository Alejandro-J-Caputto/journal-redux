import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { Validatable } from '../../interfaces/validatable.interface';
import { registerAsync } from '../../redux/actions/authActions';

export const RegisterForm = () => {
  // const authState = useSelector()
  const registerDispatch = useDispatch();

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

  const nameOpts: Validatable = {
    required: true,
    minLength: 4,
  }
  const {
    value: name,
    isValid: nameIsValid,
    containsError: nameContainsError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    focusError: focusErrorname

  } = useInput(nameOpts);
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

  const passwordConfirmOpts: Validatable = {
    valueCompare: password,
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const {
    value: passwordConfirm,
    isValid: passwordConfirmIsValid,
    containsError: passwordConfirmContainsError,
    inputChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    reset: resetPasswordConfirm,
    focusError: focusErrorPasswordConfirm
  } = useInput(passwordConfirmOpts);


  let formIsValid = false;
  if (passwordIsValid && emailIsValid && passwordConfirmIsValid && nameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const formData = {
      email,
      password,
      passwordConfirm,
      name
    }
    console.log('form correct')
    console.log(formData);
    registerDispatch(registerAsync(formData))
    resetPassword();
    resetEmail();
    resetPasswordConfirm();
    resetName();
  }

  const emailInputClasses = emailContainsError && 'auth__error--input';
  const nameInputClasses = nameContainsError && 'auth__error--input';
  const passwordInputClasses = passwordContainsError && 'auth__error--input';
  const passwordConfirmlInputClasses = passwordConfirmContainsError && 'auth__error--input';
  return (
    <div className="auth-card animate__animated animate__fadeIn">
      <form onSubmit={submitHandler} autoComplete="off" className="auth-card__form auth-card--register">
        <h2 className="heading-secondary u-margin-bottom-small u-margin-top">
          Journal Redux App
        </h2>
        <div className="auth-card__form__group ">
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            onFocus={focusErrorname}
            className={`auth-card__form__input ${nameInputClasses}`}
            placeholder="Name"
            name="name"
            value={name}
            id="name" />
          <label
            htmlFor="name"
            className="auth-card__form__label"
          >Name</label>
          {nameContainsError && <p className="error-text" >The name is required</p>}
        </div>
        <div className="auth-card__form__group">
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onFocus={focusErrorEmail}
            type="email"
            value={email}
            className={`auth-card__form__input ${emailInputClasses}`}
            name="email"
            placeholder="Email Address"
            id="email" />
          <label htmlFor="email" className="auth-card__form__label">Email Address</label>
          { emailContainsError && <p className="error-text" >The email adress is required</p>}

        </div>
        <div className="auth-card__form__group">
          <input
            onChange={passwordChangeHandler}
            onFocus={focusErrorPassword}
            onBlur={passwordBlurHandler} type="password"
            className={`auth-card__form__input ${passwordInputClasses}`}
            placeholder="Password"
            name="password"
            value={password}
            id="password" />
          <label htmlFor="password" className="auth-card__form__label">Password</label>
          {passwordContainsError && <p className="error-text"  >The password is required</p>}

        </div>
        <div className="auth-card__form__group">
          <input
            onChange={passwordConfirmChangeHandler}
            onBlur={passwordConfirmBlurHandler}
            type="password"
            onFocus={focusErrorPasswordConfirm}
            className={`auth-card__form__input ${passwordConfirmlInputClasses}`}
            placeholder="Confirm Password"
            value={passwordConfirm}
            name="passwordConfirm"
            id="passwordConfirm" />
          <label htmlFor="passwordConfirm" className="auth-card__form__label">Confirm Password</label>
          {passwordConfirmContainsError && <p className="error-text"  >The password confirmation is required</p>}
          {/* <p className="error-text">ERROR API</p> */}
        </div>
        <div className="auth-card__form__group">
          <button className="btn btn--red" disabled={!formIsValid} type="submit"> Sign In </button>
        </div>
        <div className="auth-card__form__group u-margin-bottom-small authLink">
          <p className="paragraph u-center-text">Already registered?
      </p>
          <NavLink activeClassName="spanStyle" to="/auth/login" className="paragraph u-center-text "> Log in </NavLink>
        </div>
      </form>
      <div className="auth-card__icon-box">
        <i className="fab fa-react auth-card__icon"></i>

      </div>
    </div>
  )
}

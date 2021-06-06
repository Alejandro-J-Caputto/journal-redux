import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebaseConfig'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Authorization } from '../pages/Authorization';
import { MainJournal } from '../pages/MainJournal';
import { NotFound } from '../pages/NotFound';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { LoadingSpinner } from '../components/UI/LoadingSpinner';

export const JournalRouter = () => {

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userDispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        userDispatch(login(user?.uid!, user?.displayName!))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false)
    })
  }, [userDispatch, setChecking])

  if (checking) {
    return (
      <LoadingSpinner />
    )
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn ? <Redirect to='/auth/login'/> : <Redirect to='/journal-redux'/>}
        </Route>
        <Route path="/auth" >
          {!isLoggedIn ? <Authorization /> : <MainJournal />}
        </Route>
        <Route path="/journal-redux" exact>
          {isLoggedIn ? <MainJournal /> : <Authorization />}
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

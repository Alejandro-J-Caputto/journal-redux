import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { Authorization } from '../pages/Authorization';
import { MainJournal } from '../pages/MainJournal';
import { NotFound } from '../pages/NotFound';
export const JournalRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to='/auth/login'/>
        </Route>
        <Route path="/auth" >
          <Authorization/>
        </Route>
        <Route path="/journal-redux" exact>
          <MainJournal/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

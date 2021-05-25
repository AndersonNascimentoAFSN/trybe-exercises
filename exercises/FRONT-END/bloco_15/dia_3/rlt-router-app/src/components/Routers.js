import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home';

export function Routers() {
  return (
    <Switch>
      <Route exact path="/"  render={ (props) =>  <Home {...props}/> } />
    </Switch>
  )
}

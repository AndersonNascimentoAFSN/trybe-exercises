import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';

export function Routers() {
  return (
    <Switch>
      <Route
        path="/about"
        render={(props) => <About {...props}/>}
      />
      
      <Route exact path="/"  render={ (props) =>  <Home {...props}/> } />
    </Switch>
  )
}

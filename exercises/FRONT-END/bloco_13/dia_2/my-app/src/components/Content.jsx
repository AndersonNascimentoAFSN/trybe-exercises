import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import HowTo from '../pages/HowTo';
import Profiles from '../pages/Profiles';
import Profile from '../pages/Profile';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      solutions: [
        {
          id: 'hello-world-no-react',
          name: 'Hello World no React'
        },
        {
          id: 'componentes-react',
          name: 'Componentes React',
        },
      ] 
    }
  }

  render() {
  
    return (
      <main>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/howto">  <HowTo />  </Route>
          <Route 
            exact path="/profiles"
            render={(props) => (
              <Profiles {...props} solutions={this.state.solutions} />
            )} 
          />
          <Route path="/profiles/:id" component={ Profile }/>
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    )
  }
}

export default Content;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeTest from './views/ThemeTest';
import NotFound from './views/NotFound';
import Home from './views/Home';

function Router() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/test" component={ThemeTest}/>
          <Route path="/*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
}

export default Router;

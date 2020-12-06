import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Search from './pages/search';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>  
        <Route path="/Search" exact component={Search}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
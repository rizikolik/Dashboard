import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import SideNav from 'components/SideNav';
function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' render={(props)=><SideNav {...props} Component={<Home />}  />}  />
        </Switch>
    </Router>
  );
}

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import SideNav from 'components/SideNav';
function Routes() {
  return (
    <Router>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <SideNav />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route> 
        </Switch> 
      </div>
    </Router>
  );
}


export default App;

import React from 'react';
import { ProtectedRoute } from './components/ProtectedRoute'
import { Route, Switch } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <div className='App'>
      <Switch>

        <Route path='/' exact component={Landing} />

        <ProtectedRoute path='/dash' exact>
          <Dashboard />
        </ProtectedRoute>

      </Switch>

    </div>
  );
}


export default App;

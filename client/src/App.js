import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { ProtectedRoute } from './components/ProtectedRoute'
import { Route, Switch } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
import { Register } from './components/Register'
import Auth from './assets/js/Auth'
import axios from 'axios'

function App() {
  const [user, setuser] = useState(false)
  const history = useHistory()

  const handleUserIntake = (u) => {
    setuser(u)
  }

  const registerNewUser = async (newUser) => {
    await axios.post(
      'http://localhost:3007/users', 
      newUser
    )
    let user = {
      email: newUser.email,
      password: newUser.password
    }

    Auth.login(user, (n) => {
      history.push({
          pathname: '/dash',
          state: {
              name: n
          }
      })
  })
  }

  return (
    <div className='App'>
      <Switch>

        <Route path='/' exact>
          <Landing userIntake={handleUserIntake} />
        </Route>

        <Route path='/register' exact>
          <Register regiserUser={registerNewUser}/>
        </Route>

        <ProtectedRoute path='/dash' exact>
          <Dashboard user={user} />
        </ProtectedRoute>

      </Switch>
    </div>
  );
}


export default App;

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../assets/js/Auth'

export const ProtectedRoute = ({  children, ...rest}) => {
    return (
        <Route
          {...rest}
          render={({ location }) =>
            Auth.isAuthed ? 
            (children) : 
            (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}
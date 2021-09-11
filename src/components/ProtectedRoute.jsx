import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
    {() =>
      loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />
    }
  </Route>
  )
};

import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import UserProfile from './User';
import UsersList from './UsersList';

function Users() {
  const { path, url } = useRouteMatch();
  // Use url for Links, path for Route paths

  return (
    <div>
      <ul>
        <li><Link to={url}>Users</Link></li>
        <li><Link to={`${url}/admins`}>Admins</Link></li>
      </ul>
      <Switch>
        <Route path={`${path}/admins`}>
          <p>Users: Admins</p>
        </Route>

        <Route path={`${path}/:userId`}>
          <UserProfile />
        </Route>

        <Route>
          <UsersList />
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
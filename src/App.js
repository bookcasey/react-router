import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Users from './Users';
import UserProfile from './User';
import UsersList from './UsersList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1><Link to='/'>My App</Link></h1>

        <Switch>
          <Route path='/users'>
            <Users />
          </Route>

          <Route path="/">
            <p>Homepage</p>
          </Route>

          <Route>
            <p>404 Not found</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import User from './User';
import PostForm from './PostForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My App</h1>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/posts/new'>New Post</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <p>Homepage</p>
          </Route>

          <Route path="/contact">
            <p>Contact</p>
          </Route>

          <Route path="/posts/new">
            <PostForm />
          </Route>

          <Route path="/users/admins">
            {/* More specific route first */}
            <p>Users: Admins</p>
          </Route>

          <Route path="/users/:userId">
            <User />
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

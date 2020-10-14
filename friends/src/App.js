import React from 'react';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <div className="App">
        <h1>F.r.i.e.n.d.s</h1>
         <Link to="/login"> Login </Link>
        <Link to="/friendslist">Friends</Link> 
        <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;

import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Unauthorized from './components/Unauthorized';

function App() {
  const [user, setUser] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path='/' handleLogin={handleLogin} render={props => <Home user={user.toString()} handleLogin={handleLogin} />} />
        <ProtectedRoute exact path='/dashboard' user={user} handleLogout={handleLogout} component={Dashboard} />
        <Route exact path='/unauthorized' component={Unauthorized} />
      </Router>
    </div>
  );
}

export default App;
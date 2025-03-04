import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleTokenChange = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Auth setToken={handleTokenChange} />
        </Route>
        <Route path="/dashboard">
          {token ? <Dashboard token={token} /> : <Auth setToken={handleTokenChange} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

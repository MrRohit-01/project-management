import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPage from './pages/admin/AdminPage';
import CustomerPage from './pages/customer/CustomerPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/customer" component={CustomerPage} />
      </Switch>
    </Router>
  );
};

export default App;
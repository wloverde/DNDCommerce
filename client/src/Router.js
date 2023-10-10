import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
// import LoginPage from './LoginPage'; // Import your login page component
import ItemPage from './ItemPage'; // Import your item description page component

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Define your routes */}
        <Route path="/" exact component={App} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/item/:itemId" component={ItemPage} />
        {/* Add more routes for other pages as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
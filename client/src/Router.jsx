import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import LoginPage from './LoginPage'; // Import your login page component
import ItemPage from './pages/ItemPage'; // Import your item description page component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" exact component={App} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/item/:itemId" component={ItemPage} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
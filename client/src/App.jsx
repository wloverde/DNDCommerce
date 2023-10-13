import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import ItemPage from './pages/ItemPage'; // Import your item description page component
import Login from './pages/Login';
import './App.css';
import Signup from './pages/Signup';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Define a callback function to set the selected category
  return (
    <div>
      <Router>
        {/* Pass the callback function as a prop */}
        <Navbar
          setSelectedCategory={setSelectedCategory}
          isLoggedIn={isLoggedIn}
        />
        {/* <div className='line-break'></div> */}
        {/* image test, can be resized, replaced, etc. */}
        <Routes>
          {/* Defined our routes */}
          <Route
            path='/'
            element={<Category selectedCategory={selectedCategory} />}
          />
          <Route path='/item/:itemId' element={<ItemPage />} />
          {/* Add more routes for other pages as needed */}
          <Route path={`/profile`} element={<Login />} />
          {/* <Route path={`/checkout`} element={<Checkout />} /> */}
          <Route path={'/signup'} element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

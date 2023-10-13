import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import ItemPage from './pages/ItemPage'; // Import your item description page component
import Login from './pages/Login';
import Signup from './pages/Signup';
import Auth from '../utils/auth';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
  });
  useEffect(() => {
    if (localStorage.getItem('id_token')) {
      setIsLoggedIn(true);
      const user = Auth.getProfile();
      setCurrentUser({
        ...currentUser,
        username: user.data.username,
        email: user.data.email,
      });
    }
  }, []);
  // Define a callback function to set the selected category
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* Pass the callback function as a prop */}
        <Navbar
          setSelectedCategory={setSelectedCategory}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
        />
        {/* image test, can be resized, replaced, etc. */}
        <Routes>
          {/* Defined our routes */}
          <Route
            path='/'
            element={<Category selectedCategory={selectedCategory} />}
          />
          <Route path='/item/:itemId' element={<ItemPage />} />
          {/* Add more routes for other pages as needed */}
          <Route path={`/profile`} element={isLoggedIn ? <></> : <Login />} />
          {/* <Route path={`/checkout`} element={<Checkout />} /> */}
          <Route path={'/signup'} element={<Signup />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Navbar/Navbar';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';



import Auth from '../utils/auth'; 
import { StoreProvider } from './../utils/GlobalState';

import Footer from './components/Footer/Footer';
// import Checkout from './pages/Checkout';

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
  //sets the initial state to be the consumables ObjectId
  const [selectedCategory, setSelectedCategory] = useState(
    '6528a02159e8e489b3cf815d'
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: '',
  });

  // on page load checks if the user is logged in by looking for a jwt
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
      <div>
        <StoreProvider>
          <Nav />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="/success" 
              element={<Success />} 
            />
            <Route 
              path="/orderHistory" 
              element={<OrderHistory />} 
            />
            <Route 
              path="/products/:id" 
              element={<Detail />} 
            />
            <Route
              path="*" 
              element={<NoMatch />} 
            />
          </Routes>
        </StoreProvider>
      </div>      
    <Footer />
    </Router>
  </ApolloProvider>
  );
}

export default App;
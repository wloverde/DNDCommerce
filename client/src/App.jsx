import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Detail from "./pages/Detail"; // Import your item description page component
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "../utils/auth";
import Profile from "./pages/Profile";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import OrderHistory from "./pages/OrderHistory";
import Success from "./pages/Success";
import NoMatch from "./pages/NoMatch";

import { StoreProvider } from '../utils/GlobalState';

import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
  });

  // on page load checks if the user is logged in by looking for a jwt
  useEffect(() => {
    if (localStorage.getItem("id_token")) {
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
            {/* Pass the callback function as a prop */}
            <Navbar
              setSelectedCategory={setSelectedCategory}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              selectedCategory={selectedCategory}
            />
            {/* image test, can be resized, replaced, etc. */}
            <Routes>
              {/* Defined our routes */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
                path="/"
                element={<Category selectedCategory={selectedCategory} />}
              />
              <Route path="/products/:id" element={<Detail />} />
              {/* Add more routes for other pages as needed */}
              <Route
                path={`/profile`}
                element={
                  isLoggedIn ? <Profile currentUser={currentUser} /> : <Login />
                }
              />
              {/* Displays order history */}
               <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              /> 
              {/* If payment is successful - also adds order to order history */}
               <Route 
                path="/success" 
                element={<Success />} 
              />
              {/* 404 page */}
               <Route
                path="*" 
                element={<NoMatch />} 
              />
              <Route path={"/signup"} element={<Signup />}></Route>
            </Routes>
          </StoreProvider>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

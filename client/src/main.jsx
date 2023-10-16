import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from 'use-shopping-cart';

const key = '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider
      mode='payment'
      cartMode='checkout-session'
      stripe={key}
      currency='USD'
    >
      <App />
    </CartProvider>
  </React.StrictMode>
);
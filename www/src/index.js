import React from 'react';
import { BrowserRouter } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/app.css';
import Navbar from './components/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>

  <App />
  
</BrowserRouter>
);

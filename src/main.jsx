import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import emailjs from '@emailjs/browser';

emailjs.init('V0hyNk0EU85FaBFt');  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

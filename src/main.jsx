import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

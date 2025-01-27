import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For Bootstrap's JavaScript (including the collapse feature)
import 'bootstrap-icons/font/bootstrap-icons.css';

import './main.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

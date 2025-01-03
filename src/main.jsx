import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/App.css'
import '../src/styles/style.css'
import '../src/styles/responsive.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

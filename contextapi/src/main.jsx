import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeContextProvider>
  <App />
</ThemeContextProvider>
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './contaxt/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
)

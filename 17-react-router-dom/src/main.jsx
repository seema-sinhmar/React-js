import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //Wrap all the App file with the browser router
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

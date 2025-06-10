import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'
import Todos1 from './Project'
import Project from './Project'
import Formhandiling from './Formhandiling'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formhandiling/>
  
  </StrictMode>,
)

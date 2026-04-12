import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Gopi from './gopi.tsx'
import Card from './card.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Card/>
    <Gopi/>
  </StrictMode>,
)

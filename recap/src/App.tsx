import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Gopi from './gopi'
import Sum from './Sum'

function App() {
  const result = Sum(5,3)
  console.log(result)

  return (
    <> <h1>hello bhai</h1>
    
    <Gopi/>   
    <h1>{ result }</h1>
    
    </>
    
  )
}

export default App

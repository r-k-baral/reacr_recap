import React from 'react'
import './App.css'
import Gopi from './gopi'
import Sum from './Sum'
import Todo from './components/TODO'

const App: React.FC = ()=>{ 
  const result = Sum(10,20)
  return (
  <div>
  <h1>hello bhai kaisa ho {result}</h1>
  <Todo/>
  <Todo/>
  <Todo/>
</div>
  )
}

export default App

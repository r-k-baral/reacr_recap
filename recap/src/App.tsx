import React, { useState } from 'react'
import './App.css'
import Gopi from './gopi'
import Sum from './Sum'
import Todo from './components/TODO'
import Counter from './components/Counter'


const mytodowark =[
  {
    id:1,
    title:"work learm fast"
  },
   {
    id:2,
    title:"work fast learn"
  },
   {
    id:3,
    title:"react ho gya"
  },
  {
    id:4,
    title:"react "
  }
]

const App: React.FC = ()=>{ 
  const [state, setstate] = useState<Boolean>(true)
  const [stateTwo, setstatetwo] = useState<Boolean>(true)
  const [statethre, setstatethre] = useState<Boolean>(true)
  const result = Sum(10,20)
  return (
  <div>
  <h1>hello bhai kaisa ho {result}</h1>
  <Todo items={mytodowark} />
 <button onClick={(e) => setstate(!state)}>Toggle</button>
 {state ? <Counter/> : ""}
 
</div>

  )

}


export default App

import React from 'react'
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
  const result = Sum(10,20)
  return (
  <div>
  <h1>hello bhai kaisa ho {result}</h1>
  <Todo items={mytodowark} />
 <Counter/>
 <Counter/>
 <Counter/>
</div>
  )
}

export default App

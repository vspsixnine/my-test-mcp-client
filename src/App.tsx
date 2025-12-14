import { useState } from 'react'
import TestComp from './TestComp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <TestComp />
      </div> 
    </>
  )
}

export default App

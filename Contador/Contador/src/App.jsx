import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  //let [count2, setCount2] = useState(100)

  
  function aumentar(){
    
    setCount((count) => count+ 1)
  }
  function aumentar8(){
    if(count <200){
    setCount((count) => count+ 8)
    }
  }

  function restar8(){
    if(count >-200){
    setCount((count) => count- 8)
    }
  }

  
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={()=> restar8()}>Restar en 8</button>
      <button onClick={() => setCount((count) => count - 1)}>
          Restar -
        </button>
        <h3>
           count is {count} 
        </h3>
        
        
        <button onClick={()=> aumentar()}>Aumentar +</button>
        <button onClick={()=> aumentar8()}>Aumentar en 8</button>
        
      </div>
      <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </>
    
  )
}

export default App

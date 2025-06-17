import { useState } from 'react'
import { Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Todos los return devuelven un solo elemento root
  //const state = useState(0)
  //console.log(state)
  const [count, setCount] = useState(0)
  /*
  Se recompone cada vez que pasa 1s
  setTimeout(() => {
    setCount(count+1);
  }, 1000);
  */
  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleSubstract = () => {
    setCount(count - 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return (
    <Fragment>
      <div className="container">
        <h1>Counter {count}</h1>
        <hr />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-</button>
      </div>
    </Fragment>
  );
}

export default App

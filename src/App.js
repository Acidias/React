import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    console.log('futtatas')
    return 5
  })

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
  }
  function hozzaadCount(){
    setCount(prevCount => prevCount + 1)
    console.log("hozzaad")
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={hozzaadCount}>+</button>
    </div>
  );
}

export default App;

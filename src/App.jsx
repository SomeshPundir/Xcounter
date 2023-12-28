import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the counter value
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <h1>React Counter App</h1>
      <div id="counter">Count:{counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

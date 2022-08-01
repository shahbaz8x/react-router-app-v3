import '../../App.css';
import React, { useState, useEffect } from 'react';

function Staff() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  
  
  return (
    <div>
    <p>You clicked {count} times</p>
      <p>Today is {date}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setDate(new Date().toLocaleTimeString())}>
        Date
      </button>
    </div>
  );
}

export default Staff;

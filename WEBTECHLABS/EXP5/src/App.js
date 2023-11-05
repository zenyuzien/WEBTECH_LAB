import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null); // New state to store error message

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setError(null); // Clear any previous error message
  };

  const handleCalculate = () => {
    try {
      // Make a POST request to the server to calculate
      fetch('/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: input,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((calculation) => {
          setResult(calculation);
        })
        .catch((error) => {
          setError('Server error: ' + error.message);
        });
    } catch (error) {
      setError('Client-side error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;

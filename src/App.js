// This app displays random pieces of advice when you click on 
// a button
import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await fetch('http://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice: ', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <h1>Advice Generator</h1>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get New Advice</button>
    </div>
  );
};

export default App;

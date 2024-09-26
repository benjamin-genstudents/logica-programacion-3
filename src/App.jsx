import { useState } from 'react';
import './App.css';
import logo from '../public/image.png';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const factorial = (n) => {
    if (n < 0) return 0;
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = Number(inputValue);

    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
      setError('Por favor, ingresa un número entero positivo.');
      setResult(null);
    } else {
      setError('');
      const fact = factorial(number);
      setResult(fact);
      setHistory([...history, { number, fact }]);
    }
  };

  const handleReset = () => {
    setInputValue('');
    setResult(null);
    setError('');
    setHistory([]);
  };

  return (
    <div className="App">
       <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto', marginBottom: '0px' }} />
      <h1>Calculadora de Factorial</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingresa un número"
        />
        <button type="submit">Calcular</button>
        <button type="button" onClick={handleReset}>Reiniciar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>El factorial es: {result}</p>}
      <h2>Historial de cálculos:</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.number}! = {entry.fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

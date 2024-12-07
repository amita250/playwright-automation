import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${name}! Welcome to the site.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My New React App!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}


export default App;

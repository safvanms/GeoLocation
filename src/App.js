import React from 'react';
import './App.css';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Home ip={'157.46.165.199'}/>
      </React.StrictMode>
    </div>
  );
}

export default App;

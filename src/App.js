import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header/>
        <Home/>
        <Footer/>
      </React.StrictMode>
    </div>
  );
}

export default App;

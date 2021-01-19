import React from 'react';
import './app.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;

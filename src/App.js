import React from 'react';
import Header from './components/header/header';
import PlayGround from './components/playground/playground';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <PlayGround/>
    </div>
  );
}

export default App;

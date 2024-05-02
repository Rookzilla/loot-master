import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputMenu from './inputMenu/inputMenu';

const App = () => {
  return (
    <div className="LootMaster">
      <header className="App-header">
        <p className='Title-text'>Your enemies lay vanquished! What fortune and riches lie in store? </p>
        <InputMenu />
      </header>
    </div>
  );
}

export default App;
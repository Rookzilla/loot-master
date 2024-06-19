import React from 'react';
import './App.css';
import InputMenu from './inputMenu/inputMenu';

const App = () => {
  return (
    <div className="LootMaster">
      <header className="App-header">
        <p className='Title-text'>What riches lie in store?</p>
        <InputMenu />
        <p className='Barcode-text'>andrew brown productions</p>
      </header>
    </div>
  );
}

export default App;
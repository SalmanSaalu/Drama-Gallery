import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/Rowpost/Rowpost';
import Banner from './components/Banner/Banner';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;

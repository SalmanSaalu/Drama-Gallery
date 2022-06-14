import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/Rowpost/Rowpost';
import Banner from './components/Banner/Banner';
function App() {
  const [yvideo,setYvideo]=useState(false)
  return (

    <div className="App" >
      <Navbar/>
      <Banner data={yvideo}/>
      <RowPost data={setYvideo}/>

    </div>
  );
}

export default App;

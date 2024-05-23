import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

const App =()=> {
   
    return (
        <>
          <NavBar></NavBar>
          <News pageSize={19}  country="us" category='technology'/> 
        </>
    )
}
export default App
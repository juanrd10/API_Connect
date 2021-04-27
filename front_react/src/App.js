import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { parse } from "ipaddr.js";

function TokenLink() {

  const authorize = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:3000/private");
    var res = await response.json();
    const {token} = res;
    console.log(token);
    localStorage.setItem('bearer', token);
  }

  return (
    <div>
      <button className='button' type='submit' onClick={(e)=>authorize(e)}>Refresh Token</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TokenLink/>
      </header>
    </div>
  );
}

export default App;

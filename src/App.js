import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
//import * as consttes from 'authtestlib'


//console.log(consttes.userStore);
const fetch = window.fetch;
window.fetch = (...args) => (async(args) => {
      var result = await fetch(...args);
      console.log(result); // intercept response here
      return result;
  
})(args);

function App() {
  const token = localStorage.getItem('token')
  console.log("ota app5: " + token);
  fetch('https://api.chucknorris.io/jokes/random')
    .then(function(response) {
          return response.json();
        
    })
    .then(function(myJson) {
          console.log(myJson);
        
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  react-app / hola-mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          joel test
          
        </a>
      </header>
    </div>
  );
}

export default App;

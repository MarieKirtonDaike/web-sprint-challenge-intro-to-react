import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Characters from './character';


const App = () => {
  const [character, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

useEffect(()=> {
  axios.get('https://swapi.dev/api/people/')
  .then(response => {
    setCharacters(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}, []);

 
const dataElements = character.map((item) => {
  return (
    <div key={item.id}>
      <h2>{item.name}</h2>
    </div>
  );
});
  // const renderelements = character.map((char, index)=>{
  //           return (<div key={index}> {char.name}</div>)})
    
  

 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
      <h1 className="Header">Characters</h1>
     <div key={dataElements.id}>{dataElements}</div>
      {/* <Characters character={character} /> */}
    </div>
  );
}

export default App;

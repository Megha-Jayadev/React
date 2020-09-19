import React from 'react';
import './App.css';
import Postdata from './Postdata'
import Postusers from './Postusers'
import UserInput from './UserInput'


function App() {
  return (
    <div>
      <UserInput></UserInput>
      <Postdata></Postdata>
      <Postusers></Postusers>
    </div>
  );
}

export default App;

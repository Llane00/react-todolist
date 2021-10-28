import React, { useState } from 'react';
import './App.css';
import { AddInput } from './components/AddInput';
import { Header as MyHeader } from './components/Header';

function App() {
  const [inputVisible, setInputVisible] = useState(false)

  return (
    <div className="App">
      <MyHeader switchInputVisible={() => setInputVisible(!inputVisible)} />
      <AddInput inputVisible={inputVisible}/>
    </div>
  );
}

export default App;

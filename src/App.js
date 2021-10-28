import React, { useState, useCallback } from 'react';
import './App.css';
import { AddInput } from './components/AddInput';
import { Header as MyHeader } from './components/Header';

function App() {
  const [inputVisible, setInputVisible] = useState(false)
  const [todolist, setTodolist] = useState([])

  const addItem = useCallback((value) => {
    const item = {
      id: new Date().getTime(),
      content: value,
      completed: false
    }

    setTodolist(list => [...list, item])
    setInputVisible(false)
  }, [])

  return (
    <div className="App">
      <MyHeader switchInputVisible={() => setInputVisible(!inputVisible)} />
      <AddInput inputVisible={inputVisible} addItem={ addItem }/>
    </div>
  );
}

export default App;

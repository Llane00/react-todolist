import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { AddInput } from './components/AddInput';
import { Header as MyHeader } from './components/Header';
import { TodoItem } from './components/TodoItem';

function App() {
  const [inputVisible, setInputVisible] = useState(false)
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]")
    setTodoList(todoData)
    return () => {}
  }, [])

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList))
  }, [todoList])
  
  const addItem = useCallback((value) => {
    const item = {
      id: new Date().getTime(),
      content: value,
      completed: false
    }

    setTodoList(list => [...list, item])
    setInputVisible(false)
  }, [])

  return (
    <div className="App">
      <MyHeader switchInputVisible={() => setInputVisible(!inputVisible)} />
      <AddInput inputVisible={inputVisible} addItem={addItem} />
      <ul className="todo-list">
        {
          todoList &&
          todoList.map((item) => 
            <TodoItem
              data={item}
              key={item.id}
            />
          )
        }
      </ul>
    </div>
  );
}

export default App;

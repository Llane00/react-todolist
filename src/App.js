import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { AddInput } from './components/AddInput';
import { Header as MyHeader } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { CheckModal } from './components/Modal/CheckModal';
import { EditModal } from './components/Modal/EditModal';

function App() {
  const [inputVisible, setInputVisible] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [checkModalVisible, setCheckModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [currentItemData, setCurrentItemData] = useState({})

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

  const openCheckModal = useCallback((id) => {
    setCurrentItemData(todoList.filter((item) => item.id === id)[0])
    setCheckModalVisible(true)
  }, [todoList])

  const closeCheckModal = useCallback(() => {
    setCheckModalVisible(false)
  }, [])

  const openEditModal = useCallback((id) => {
    console.log(id)
    setCurrentItemData(todoList.filter((item) => item.id === id)[0])
    setEditModalVisible(true)
    console.log(currentItemData, editModalVisible)
  }, [todoList])

  const submitData = useCallback(() => {
    setEditModalVisible(false)
  }, [])

  return (
    <div className="App">
      <CheckModal
        checkModalVisible={checkModalVisible}
        data={currentItemData}
        closeCheckModal={closeCheckModal}
      />
      <EditModal
        editModalVisible={editModalVisible}
        data={currentItemData}
        submitData={submitData}
      />
      <MyHeader switchInputVisible={() => setInputVisible(!inputVisible)} />
      <AddInput inputVisible={inputVisible} addItem={addItem} />
      <ul className="todo-list">
        {
          todoList &&
          todoList.map((item) => 
            <TodoItem
              data={item}
              key={item.id}
              openCheckModal={openCheckModal}
              openEditModal={openEditModal}
            />
          )
        }
      </ul>
    </div>
  );
}

export default App;

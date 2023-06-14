import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import todoListMoks from './mocks/todolistMocks';
import TodoList from './components/todoList/TodoList';

function App() {

  return (
    <>
      <h1 className='title'>Todolist</h1>
      <TodoList data = {todoListMoks}/>
    </>
  )
}

export default App

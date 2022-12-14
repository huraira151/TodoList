import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const getTodoList = () => {
  let todoList = localStorage.getItem('todos')

  if (todoList) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
}

function Todo() {
  const [todos, setTodos] = useState(getTodoList());
  const [edit, setedit] = useState()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    if (window.confirm('Are you sure you wish to delete this Todo?'))

    setTodos(removedArr);
  };
  
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setedit({
      id: null,
      value: ''
    });
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm edit={edit} onSubmit={edit?.id ? submitUpdate : addTodo} />
      <TodoList
        setedit={setedit}
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} />
    </>
  );
}

export default Todo;

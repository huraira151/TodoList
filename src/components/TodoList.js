import React, { useEffect, useState } from 'react';
import { RiCloseCircleLine, TiEdit } from 'react-icons/all';
import unchecked from "./unchecked.png"
import checked from "./checked.png"

const TodoList = ({ todos, completeTodo, removeTodo, setedit }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  useEffect(() => {
    setedit(edit)
  }, [edit, setedit])

  return todos.map((todo, index) => (
    <div
    className={todo.isComplete ? 'complete' : 'todo-row'}
      key={index}
    >
      <div >
        {/* <BsCheckAll className={todo.isComplete ? 'checkbox check' : 'checkbox'} style={{}} key={todo.id} onClick={() => completeTodo(todo.id)} /> */}
        {todo.isComplete ? <img className='img' src={checked} alt='' onClick={() => completeTodo(todo.id)} 
        /> : <img className='img' src={unchecked} alt='' onClick={() => completeTodo(todo.id)} />}
        {/* <input className='checkbox' type='checkbox' key={todo.id} onClick={() => completeTodo(todo.id)} /> */}
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default TodoList;

import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit?.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  useEffect(()=>{
    if(props.edit?.id) {
      setInput(props.edit?.value)
    }
  }, [props.edit])

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });

    setInput('');
  };

  if (props.edit && props.edit?.id) {
    return (
      <form onSubmit={handleSubmit} className='todo-form'>
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            required
          />
          <button className='todo-button edit'>
            Update
          </button>
        </>
      </form>
        )} 

    return (
      <form onSubmit={handleSubmit} className='todo-form'>
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            required
          />
          <button  className='todo-button'>
            Add todo
          </button>
        </>
      </form>
    )
};

export default TodoForm;

//   return (
//     <form onSubmit={handleSubmit} className='todo-form'>
//       {props.edit && props.edit?.id ? (
//         <>
//           <input
//             placeholder='Update your item'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             ref={inputRef}
//             className='todo-input edit'
//             required
//           />
//           <button className='todo-button edit'>
//             Update
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             placeholder='Add a todo'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             className='todo-input'
//             ref={inputRef}
//             required
//           />
//           <button  className='todo-button'>
//             Add todo
//           </button>
//         </>
//       )}
//     </form>
//   );
// }

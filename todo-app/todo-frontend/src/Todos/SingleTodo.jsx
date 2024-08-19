import React from 'react';


const SingleTodo = ({todo, completeTodo, deleteTodo}) => {

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={deleteTodo}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={deleteTodo}> Delete </button>
        <button onClick={completeTodo}> Set as done </button>
      </span>
    </>
  )

  return (
    <>
    <hr />
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
    </>
  )
}
export default SingleTodo
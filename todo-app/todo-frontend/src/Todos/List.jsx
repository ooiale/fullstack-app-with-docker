import React from 'react'
import SingleTodo from './SingleTodo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <div>
      {todos.map(todo => (
          <SingleTodo
            key={todo._id} // assuming each todo has a unique 'id' property
            todo={todo}
            deleteTodo={onClickDelete(todo)}
            completeTodo={onClickComplete(todo)}
          />
      ))}
    </div>
  )

}
export default TodoList

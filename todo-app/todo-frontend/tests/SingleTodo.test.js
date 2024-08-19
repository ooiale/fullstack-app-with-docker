import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SingleTodo from '../src/Todos/SingleTodo';

describe('SingleTodo Component', () => {
  const mockDeleteTodo = jest.fn();
  const mockCompleteTodo = jest.fn();

  test('renders todo text', () => {
    const todo = { text: 'Test Todo', done: false };
    const { getByText } = render(
      <SingleTodo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />
    );
    expect(getByText('Test Todo')).toBeInTheDocument();
    expect(getByText('This todo is not done')).toBeInTheDocument();
  });
});

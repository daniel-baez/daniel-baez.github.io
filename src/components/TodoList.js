
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoList = ({ todos, removeTodo }) => (
  <List className="list-group">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
    ))}
  </List>
);

export default TodoList;

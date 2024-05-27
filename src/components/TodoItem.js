
import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TodoItem = ({ todo, removeTodo }) => (
  <Item className="list-group-item d-flex justify-content-between align-items-center">
    {todo.text}
    <button onClick={() => removeTodo(todo.id)} className="btn btn-danger btn-sm">Remove</button>
  </Item>
);

export default TodoItem;


import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      id: Date.now(),
      text: value
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mb-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
        className="form-control mr-2"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default TodoForm;

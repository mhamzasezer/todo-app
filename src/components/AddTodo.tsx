// src/components/AddTodo.tsx
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const setTodos = useSetRecoilState(todoListState);

  const handleAddTodo = () => {
    if (title.trim() !== '') {
      setTodos((prev) => [...prev, { title, created: new Date(), completed: false }]);
      setTitle('');
      setError(null);
      setMessage('Task added successfully!');
    } else {
      setError('Please enter a valid title.');
      setMessage(null);
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default AddTodo;

// src/components/TodoList.tsx
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');

  const handleDeleteTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
    setEditingIndex(null); // Reset editing state when a task is deleted
  };

  const handleCompleteTodo = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setEditingIndex(null); // Reset editing state when a task is completed
  };

  const handleEditTodo = (index: number) => {
    setEditingIndex(index);
    setEditedTitle(todos[index].title);
  };

  const handleSaveEdit = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, title: editedTitle } : todo
      )
    );
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div>
      <h2>TODO List</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(index)}
            />
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {todo.created.toLocaleDateString()} - {todo.title}
                <FontAwesomeIcon
                  icon={faPen}
                  className="icon"
                  onClick={() => handleEditTodo(index)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon"
                  onClick={() => handleDeleteTodo(index)}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

// src/components/TodoList.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { RecoilRoot } from 'recoil';

test('renders TODO list', () => {
  render(
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );

  const todoListElement = screen.getByText(/TODO List/i);
  expect(todoListElement).toBeInTheDocument();
});

// Add more tests as needed

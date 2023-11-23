// src/tests/AddTodo.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import AddTodo from '../components/AddTodo';
import { test } from 'vitest'

test('adds a new TODO item', () => {
  render(
    <RecoilRoot>
      <AddTodo />
    </RecoilRoot>
  );

  const inputElement = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /add todo/i });

  // Type a task title
  fireEvent.input(inputElement, { target: { value: 'New Task' } });

  // Click the "Add Todo" button
  fireEvent.click(addButton);

  // Add your assertions here
  expect(screen.getByText(/Task added successfully!/i)).toBeInTheDocument();
});
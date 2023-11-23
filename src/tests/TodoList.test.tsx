// src/tests/TodoList.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TodoList from '../components/TodoList';
import { test } from 'vitest'

test('deletes a TODO item', () => {
  render(
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );

  // Assuming your delete button has a role of 'button' and name of 'delete'
  const deleteButton = screen.getByRole('button', { name: /delete/i });

  // Click the "Delete" button
  fireEvent.click(deleteButton);

  // Add your assertions here
  // For example, if deleting a TODO item shows a success message:
  expect(screen.getByText(/Task deleted successfully!/i)).toBeInTheDocument();
});
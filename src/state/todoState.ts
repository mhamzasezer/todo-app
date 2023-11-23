// src/state/todoState.ts
import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [] as { title: string; created: Date; completed: boolean }[],
});

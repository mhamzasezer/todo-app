import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { RecoilRoot } from 'recoil';
import './App.css';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          {/* If you want to keep the logo and existing content */}
          {/* Comment out or remove the lines below if not needed */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>Edit <code>src/App.tsx</code> and save to reload.</p> */}
          {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> */}

          {/* AddTodo component for adding new todos */}
          <AddTodo />

          {/* TodoList component for displaying the list of todos */}
          <TodoList />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;

import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDom.render(<App />,
  document.getElementById('root'));
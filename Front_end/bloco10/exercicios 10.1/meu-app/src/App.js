// import logo from './logo.svg';
import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['wake up', 'breakfast', 'f1', 'study', 'videogames', 'rest'];

class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          {tasks.map((current) => Task(current))}
        </ul>
      </>
   );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import AddTodo from './components/AddTodo'

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <AddTodo />
        <List />

      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Watch movies',
        completed: true
      },
      {
        id: 3,
        title: 'CTCI',
        completed: false
      },
    ]
  }

  //Toggle
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
      })
    });
    console.log(id)
  }

  delete = (id) => {
    this.setState({
      todos:[...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>
          <Todos todos= {this.state.todos} markComplete= {this.markComplete} delete = {this.delete}/>
        </h1>
      </div>
    );
  }

}

export default App;

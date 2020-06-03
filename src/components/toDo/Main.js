import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all'
    }
    this.nextTodoId = 0;
  }
  render() {
    const todos = this.getVisibleTodos();
    const { filter } = this.props;
    return (
      <div>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <TodoList todos={todos} toggleTodo={this.toggleTodo}></TodoList>
        <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter}></Footer>
      </div>
    );
  }

  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    console.log('getVisible')
    return this.state.todos.filter(item => {
      if (currentFilter === "active") {
        return !item.completed
      } else if (currentFilter === "completed") {
        return item.completed
      } else {
        return true;
      }
    })
  }

  addTodo = text => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    }
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    })
  }

  toggleTodo = id => {
    const newTodos = this.state.todos.map(item => {
      console.log(item.id,id,item,123)
      return item.id === id ? {...item, completed: !item.completed} : item
    })
    console.log(newTodos,456)
    this.setState({
      todos: newTodos
    })
  }

  setVisibilityFilter = filter => {
    console.log('filter')
    this.setState({
      filter
    })
  }
}

export default Main;
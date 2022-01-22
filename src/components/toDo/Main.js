import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addTodo, toggleTodo, setVisibilityFilter } from "@src/redux/actions";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

import { Button } from "antd";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todos: [],
      filter: "all",
      postId: "112aas",
    };
    this.nextTodoId = 0;
  }
  componentDidMount() {}
  render() {
    const todos = this.getVisibleTodos();
    const { filter } = this.props;
    return (
      <div>
        <AddTodo addTodo={this.addTodos}></AddTodo>
        <TodoList todos={todos} toggleTodo={this.toggleTodo}></TodoList>
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        ></Footer>
        <Button type="ghost" onClick={this.linkToAnt}>
          antLab
        </Button>
        <Button type="ghost" onClick={this.linkToTalent}>
          talent
        </Button>
      </div>
    );
  }

  getVisibleTodos = () => {
    const { todos, filter } = this.props;
    // const currentFilter = this.state.filter;
    return todos.filter((item) => {
      if (filter === "active") {
        return !item.completed;
      } else if (filter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  };

  addTodos = (text) => {
    const { onTodoClick, todos } = this.props;
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false,
    };
    const newTodos = [todo, ...todos];
    this.setState({
      todos: newTodos,
    });
    onTodoClick(todo);
  };

  toggleTodo = (id) => {
    const { toggleTodos } = this.props;
    toggleTodos(id);
    // debugger;
    // const newTodos = this.state.todos.map(item => {
    //   return item.id === id ? {...item, completed: !item.completed} : item
    // })
    // this.setState({
    //   todos: newTodos
    // })
  };

  setVisibilityFilter = (filter) => {
    const { setFilter } = this.props;
    setFilter(filter);
    // this.setState({
    //   filter
    // })
  };

  linkToAnt = () => {
    const { postId } = this.state;
    const isLimited = false;
    this.props.history.push(`/antLab?id=${postId}`, { isLimited });
  };

  linkToTalent = () => {
    // 新建窗口
    window.open("/codePen");
  };
}

const mapStateToProps = (state, props) => ({
  todos: state.todos,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(addTodo(id));
    },
    setFilter: (type) => dispatch(setVisibilityFilter(type)),
    toggleTodos: (index) => dispatch(toggleTodo(index)),
  };
};

// 简写
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));

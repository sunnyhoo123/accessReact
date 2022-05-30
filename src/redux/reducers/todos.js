import { ADD_TODO, TOGGLE_TODO } from "@src/redux/actions";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.texts];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todos;

import { SET_MENU, GET_MENU } from "@src/redux/actions";

function activeMenu(state = "0", action) {
  console.log("***", state);
  switch (action.type) {
    case SET_MENU:
      return action.menu;
    case GET_MENU:
      return state;
    default:
      return state;
  }
}

export default activeMenu;

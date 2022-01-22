import { combineReducers } from "redux";

import todos from "./todos";
import filter from "./filter";
import savePage from "./savePage";
import activeMenu from "./activeMenu";

export default combineReducers({
  todos,
  filter,
  savePage,
  activeMenu,
});

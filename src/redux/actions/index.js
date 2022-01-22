/*
 * action 类型
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SAVE_PAGE = "SAVE_PAGE";
export const SET_MENU = "SET_MENU";
export const GET_MENU = "GET_MENU";

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

/*
 * action 创建函数
 */

export function addTodo(texts) {
  return { type: ADD_TODO, texts };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function savePage(page) {
  return { type: SAVE_PAGE, page };
}

export function setMenu(menu) {
  return { type: SET_MENU, menu };
}

export function getMenu(menu) {
  return { type: GET_MENU, menu };
}

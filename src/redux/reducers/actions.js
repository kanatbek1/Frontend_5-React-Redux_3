import types from './types';

export function changeTitleAction() {
  return {
    type: "CHANGE_TITLE"
  };
}
export function withParamsAction(title) {
  return {
    type: types.WITH_PARAMS,
    payload: title
  };
}
export function changeInputAction(value) {
  return {
    type: types.VALUE,
    payload: value
  };
}
export function addUserAction(name) {
  return {
    type: types.ADD_USER,
    payload: name
  };
}
export function deleteAllUsersAction() {
  return {
    type: types.DELETE_ALL_USERS,
  };
}
export const addNumberAction = (number) => ({
    type: "ADD_NUMBER",
    payload: number,
  });
  export const clearNumbersAction = () => ({
    type: "CLEAR_NUMBERS",
  });
  
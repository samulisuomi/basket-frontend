/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const DELETE_ITEM = 'REMOVE_ITEM';
export const ASSIGN_ITEM = 'ASSIGN_ITEM';
export const UNASSIGN_ITEM = 'UNASSIGN_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'REMOVE_COMMENT';
export const NEW_LIST = 'NEW_LIST';
export const INVITE_USER = 'INVITE_USER';

/*
 * other constants
 */

/*
 * action creators
 */

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  };
};

export const editItem = (id, newText) => {
  return {
    type: EDIT_ITEM,
    id,
    newText
  };
};

export const toggleItem = (id) => {
  return {
    type: TOGGLE_ITEM,
    id
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  };
};

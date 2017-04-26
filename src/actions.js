/**
 * Redux action definitions.
 */

// Action types:

export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const DELETE_ITEM = 'REMOVE_ITEM';
export const ASSIGN_ITEM = 'ASSIGN_ITEM';
export const UNASSIGN_ITEM = 'UNASSIGN_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'REMOVE_COMMENT';
export const NEW_LIST = 'NEW_LIST';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

// Other constants:

// Action creators:

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    text
  };
};

export const editItem = (id, text) => {
  return {
    type: EDIT_ITEM,
    id,
    text
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

export const assignItem = (itemId, user) => {
  return {
    type: ASSIGN_ITEM,
    itemId,
    user
  };
};

export const unassignItem = (itemId, user) => {
  return {
    type: UNASSIGN_ITEM,
    itemId,
    user
  };
};

export const addComment = (itemId, text) => {
  return {
    type: ADD_COMMENT,
    itemId,
    text
  };
};

export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId
  };
};

export const newList = () => {
  return {
    type: NEW_LIST
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user
  };
};

export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    user
  };
};


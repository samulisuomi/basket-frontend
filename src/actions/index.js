/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

/*
 * other constants
 */

/*
 * action creators
 */

export const addItem = (text) => {
  return { type: ADD_ITEM, text };
}

export const toggleItem = (index) => {
  return { type: TOGGLE_ITEM, index };
}

export const removeItem = (filter) => {
  return { type: REMOVE_ITEM, filter };
}

/**
 * Redux reducers.
 */

import {
  ADD_ITEM,
  TOGGLE_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  ASSIGN_ITEM,
  UNASSIGN_ITEM,
  ADD_COMMENT,
  DELETE_COMMENT,
  NEW_LIST,
  ADD_USER,
  REMOVE_USER
} from './actions';

// TODO: Real authentication:
const thisUser = 'you@example.com';

const initialState = {
  items: [],
  users: [thisUser],
  shared: [],
  loggedInAs: thisUser
};

/* TODO: Get IDs from backend and use a temp id until request finished.
 * Would require new action to change tempIds to realIds.
 * We could also utilize something like PouchDB?
 */
let tempItemIdCounter = null;
let tempCommentIdCounter = null;

// Returns the object with maximum ID number from the array, or -1:
const initIdCounter = (arrayOfObjectsWithIdProperty) => {
  return arrayOfObjectsWithIdProperty.reduce((previous, current) =>
      Math.max(previous.id, current.id), {}).id || -1;
}

// TODO: Separate reducers
function itemsReducer(state = initialState, action) {
  // Init the ID counters the first time the reducer is called:
  if (tempItemIdCounter === null) {
    tempItemIdCounter = initIdCounter(state.items);
  }
  if (tempCommentIdCounter === null) {
    // First concat all the comments from all the items:
    const allComments = state.items.map(item => item.comments).reduce((previous, current) => previous.concat(current), []);
    tempCommentIdCounter = initIdCounter(allComments);
  }
  switch (action.type) {
    case ADD_ITEM:
      tempItemIdCounter++;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: tempItemIdCounter,
            text: action.text,
            bought: false,
            assigned: [],
            comments: [{id: 2, user: 'you@example.com', timestamp: new Date(), text: 'Testi testi'}]
          }
        ]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.id) {
            return Object.assign({}, item, {
              bought: !item.bought
            });
          }
          return item;
        })
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.id) {
            return Object.assign({}, item, {
              text: action.text
            });
          }
          return item;
        })
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    case ASSIGN_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.itemId) {
            return Object.assign({}, item, {
              // Do not add user if already added. 
              assigned: (item.assigned.indexOf(action.user) === -1)
                ? item.assigned.concat([action.user])
                : item.assigned
            });
          }
          return item;
        })
      }
    case UNASSIGN_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.itemId) {
            return Object.assign({}, item, {
              assigned: item.assigned.filter(user => user !== action.user)
            });
          }
          return item;
        })
      }
    case ADD_COMMENT:
      tempCommentIdCounter++;
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.itemId) {
            return Object.assign({}, item, {
              comments: item.comments.concat([{
                id: tempCommentIdCounter,
                user: action.user,
                timestamp: new Date(),
                text: action.text
              }])
            });
          }
          return item;
        })
      };
    case DELETE_COMMENT:
      return {
        ...state,
        items: state.items.map(item =>
          Object.assign({}, item, {
            comments: item.comments.filter(comment => comment.id !== action.commentId)
          })
        )
      }
    case NEW_LIST:
      return {
        ...state,
        items: []
      };
    case ADD_USER:
      return {
        ...state,
        // Do not add user if already added. TODO: Inform user about invalid action:
        users: (state.users.indexOf(action.user) === -1)
          ? state.users.concat([action.user])
          : state.users
      }
    case REMOVE_USER:
      return {
        ...state,
        // Prevent removing the own user. TODO: Inform user about invalid action:
        users: (action.user !== state.loggedInAs)
          ? state.users.filter(user => user !== action.user)
          : state.users
      }
    default:
      return state
  }
}

export default itemsReducer;
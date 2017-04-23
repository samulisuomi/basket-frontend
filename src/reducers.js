import { ADD_ITEM, TOGGLE_ITEM, EDIT_ITEM, DELETE_ITEM } from './actions';

const initialState = {
  items: [],
  users: [],
  shared: [],
  loggedInAs: null
};

/* TODO: Get ID from backend and use a temp id until request finished.
 * Would require new action to change tempIds to realIds.
 * We could also utilize something like PouchDB.
 */
let tempIdCounter = null;

function itemsReducer(state = initialState, action) {
  // Init the ID counter the first time the reducer is called:
  if (tempIdCounter === null) {
    tempIdCounter = state.items.reduce((previous, current) =>
        Math.max(previous.id, current.id), {}).id || -1;
  }
  switch (action.type) {
    case ADD_ITEM:
      tempIdCounter++;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: tempIdCounter,
            text: action.text,
            bought: false,
            assigned: [],
            comments: []
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
    default:
      return state
  }
}

export default itemsReducer;
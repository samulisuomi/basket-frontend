import { ADD_ITEM, TOGGLE_ITEM, EDIT_ITEM, DELETE_ITEM } from './actions';

/*
 * TODO: Replace with more modular reducers:
 */
const initialState = {
  items: [{
      id: 0,
      bought: false,
      text: 'Hello',
      assigned: [],
      comments: []
    }
  ],
  users: [],
  shared: [],
  loggedInAs: null
};

/* TODO: Get ID from backend and use temp id until request finished.
 * (Would require new action to change tempIds to realIds).
 * Another way: use something like PouchDB.
 */
let idCounter = initialState.items.reduce((previous, current) =>
    Math.max(previous.id || -1, current.id)).id;

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      idCounter++;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: idCounter,
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
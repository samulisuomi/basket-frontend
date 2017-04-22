import { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM } from '../actions';

function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          text: action.text,
          bought: false,
          assigned: [],
          comments: []
        }
      ]
    case TOGGLE_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            completed: !item.bought
          })
        }
        return item
      })
    case REMOVE_ITEM:
      return state.filter((item, index) => index === action.index);
    default:
      return state
  }
}

export default itemsReducer;
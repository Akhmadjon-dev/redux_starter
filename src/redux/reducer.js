let lastId = 0;

import * as actions from "./actionTypes";
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BUG:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((c) => c.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((item) =>
        item.id !== action.payload.id ? item : { ...item, resolved: true }
      );
    default:
      return state;
  }
}

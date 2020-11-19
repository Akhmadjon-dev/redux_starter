let lastId = 0;
import { createReducer, createAction } from "@reduxjs/toolkit";
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");
export default createReducer([], {
  bugAdded: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  bugResolved: (bugs, action) => {
    const index = bugs.findIndex((item) => item.id === action.payload.id);
    bugs[index].resolved = true;
  },
});

// import * as actions from "./actionTypes";
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case actions.ADD_BUG:
//       return [
//         ...state,
//         {
//           id: lastId++,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case actions.BUG_REMOVED:
//       return state.filter((c) => c.id !== action.payload.id);
//     case actions.BUG_RESOLVED:
//       return state.map((item) =>
//         item.id !== action.payload.id ? item : { ...item, resolved: true }
//       );
//     default:
//       return state;
//   }
// }

import { createAction } from "@reduxjs/toolkit";
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");
// import * as actions from "./actionTypes";
// export const addBug = (description) => ({
//   type: actions.ADD_BUG,
//   payload: {
//     description,
//   },
// });
// export const resolvedBug = (id) => ({
//   type: actions.BUG_RESOLVED,
//   payload: {
//     id,
//   },
// });

import * as actions from "./actionTypes";
export const addBug = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description,
  },
});
export const resolvedBug = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

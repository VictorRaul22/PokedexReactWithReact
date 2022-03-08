import { typeErrors } from "../actions/type";

export const logActions = () => (next) => (actionInfo) => {
  window.console.log("disparando: ", actionInfo);
  next(actionInfo);
};
export const reportError = () => (next) => (actionInfo) => {
  const { action } = actionInfo;
  if (action?.type === typeErrors.SET_ERROR) {
    window.console.error(action.payload);
  }
  next(actionInfo);
};

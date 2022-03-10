// import { typeErrors } from "../actions/type";

export const logActions = () => (next) => (actionInfo) => {
  window.console.log("disparando: ", actionInfo);
  next(actionInfo);
};
export const reportError = () => (next) => (actionInfo) => {
  const { type } = actionInfo;
  if (type === "ui/setError") {
    window.console.error(actionInfo.payload, "desde midleware");
  }
  next(actionInfo);
};

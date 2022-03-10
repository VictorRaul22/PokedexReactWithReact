import { fromJS } from "immutable";
import { typeErrors, TOGGLE_LOADER } from "../actions/type";

const initialState = fromJS({
  error: [],
  loading: false,
});
const uiReducerObject = (state, payload = {}) => ({
  [typeErrors.SET_ERROR]: state.set("error", fromJS(payload)),
  [typeErrors.CLEAR_ERROR]: state.set("error", fromJS([])),
  [TOGGLE_LOADER]: state.set("loading", !state.get("loading")),
});
const uiReducer = (state = initialState, action = { type: null }) => {
  if (uiReducerObject(state)[action.type]) {
    return uiReducerObject(state, action.payload)[action.type];
  }
  return state;
};
export default uiReducer;

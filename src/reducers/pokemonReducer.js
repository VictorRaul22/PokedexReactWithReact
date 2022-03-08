import { typePokemons, typeErrors } from "../actions/type";

const initialState = {
  list: [],
  error: [],
};
const pokemonReducerObject = (state, payload = {}) => ({
  [typePokemons.SET_POKEMON]: {
    ...state,
    list: payload,
  },
  [typeErrors.SET_ERROR]: {
    ...state,
    error: payload.message,
  },
  [typeErrors.CLEAR_ERROR]: {
    ...state,
    error: "",
  },
});
const pokemonReducer = (state = initialState, action = { type: null }) => {
  if (pokemonReducerObject(state)[action.type]) {
    return pokemonReducerObject(state, action.payload)[action.type];
  }
  return state;
};
export default pokemonReducer;

import { fromJS } from "immutable";
import { typePokemons } from "../actions/type";

const initialState = fromJS({
  list: [],
});
function ListFavorite(state, payload) {
  // console.log("funcion ejecutada favorite")
  const currentPokemonIndex = state
    .get("list")
    .findIndex((elem) => elem.get("id") === payload.pokemonId);
  const isFavorite = state.getIn(["list", currentPokemonIndex, "favorite"]);
  return state.setIn(["list", currentPokemonIndex, "favorite"], !isFavorite);
}
const pokemonReducerObject = (state, payload = {}) => ({
  [typePokemons.SET_POKEMON]: state.set("list", fromJS(payload)),
  [typePokemons.SET_FAVORITE]: ListFavorite(state, payload),
});

const pokemonReducer = (state = initialState, action = { type: null }) => {
  if (pokemonReducerObject(state)[action.type]) {
    return pokemonReducerObject(state, action.payload)[action.type];
  }
  return state;
};
export default pokemonReducer;

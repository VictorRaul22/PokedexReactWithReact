// import { getPokemons } from "../api/getPokemons";
import { typePokemons, typeErrors, typeFetch, TOGGLE_LOADER } from "./type";

export const setPokemons = (payload) => ({
  type: typePokemons.SET_POKEMON,
  payload,
});
export const setErrors = (payload) => ({
  type: typeErrors.SET_ERROR,
  payload,
});
export const cleanError = () => ({
  type: typeErrors.CLEAR_ERROR,
});
export const fetchPokemonDetails = (payload) => ({
  type: typeFetch.FETCH_POKEMON_DETAIL,
  payload,
});
export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});
export const setFavorite = (payload) => ({
  type: typePokemons.SET_FAVORITE,
  payload,
});
// Para hacer esto es necesario el react thunk
// export const setPokemonsWithDetails =
//   (pokemons = []) =>
//     async (dispatch) => {
//       // window.console.log(getState(), "Ver estado desde actions")
//       try {
//         const PromisePokemons = await Promise.all(
//           pokemons.map((pokemon) => fetch(pokemon.url))
//         );
//         const JsonPokemonsWithDetails = await Promise.all(
//           PromisePokemons.map((res) => res.json())
//         );

//         // console.log(JsonPokemonsWithDetails)
//         dispatch(setPokemons(JsonPokemonsWithDetails));
//         // window.console.log(getState(), "Ver estado desde actions")
//       } catch (error) {
//         dispatch(setErrors({ message: "Oops! Something went wrong.", error }));
//       }
//     };

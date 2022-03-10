/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsWithDetails } from "../api/getPokemons";
import { setError, toggleLoading } from "./ui";

const initialState = {
  list: [],
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoading());
      const response = await getPokemons(10);
      const pokemonsWithDetails = await getPokemonsWithDetails(
        response.results
      );
      dispatch(setPokemon(pokemonsWithDetails));
      dispatch(toggleLoading());
    } catch (error) {
      const where = `${error.where} >> Slice FetchPokemons`;
      dispatch(setError({ header: error.code, content: where }));
      dispatch(toggleLoading());
    }
  }
);
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.list = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.list.findIndex(
        (elem) => elem.id === action.payload.pokemonId
      );
      if (currentPokemonIndex >= 0) {
        state.list[currentPokemonIndex].favorite =
          !state.list[currentPokemonIndex].favorite;
      }
    },
  },
});
export const { setPokemon, setFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;

import { call, put, takeEvery } from "redux-saga/effects";
import { setErrors, setPokemons, toggleLoader } from "../actions";
import { getPokemonsWithDetails } from "../api/getPokemons";

function* fetchPokemonsWithDetails(action) {
  try {
    yield put(toggleLoader());
    const pokemonsWithDetails = yield call(
      getPokemonsWithDetails,
      action.payload
    );
    // console.log(pokemonsWithDetails, "sags")
    yield put(setPokemons(pokemonsWithDetails));
    yield put(toggleLoader());
  } catch (error) {
    yield put(setErrors({ header: error.code, content: error.where }));
  }
}

function* pokemonSaga() {
  yield takeEvery("FETCH_POKEMON_DETAIL", fetchPokemonsWithDetails);
}

export default pokemonSaga;

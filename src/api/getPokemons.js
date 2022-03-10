import fetchConf from "../services/fetch";

export const getPokemons = async (limit = 151) => {
  try {
    const getPokeApi = await fetchConf(`pokemon?limit=${limit}`);
    return getPokeApi;
  } catch (e) {
    const error = {
      ...e,
      code: e.code || "Code undefined",
      where: `${e.where} >> fetchPokemons`,
    };
    throw error;
  }
};
export const getPokemonsWithDetails = async (pokemons) => {
  try {
    const PromisePokemons = await Promise.all(
      pokemons.map((pokemon) => fetch(pokemon.url))
    );
    const JsonPokemonsWithDetails = await Promise.all(
      PromisePokemons.map((res) => res.json())
    );
    return JsonPokemonsWithDetails;
  } catch (e) {
    const error = {
      ...e,
      code: e.code || "Code undefined",
      where: `${e.where} >> fetchPokemonsWithDetails`,
    };
    throw error;
  }
};

import fetchConf from "../services/fetch";

export const getPokemons = async (limit = 151) => {
  // try {
  const getPokeApi = await fetchConf(`pokemon?limit=${limit}`);
  if (getPokeApi instanceof Error) throw getPokeApi;
  return getPokeApi;
  // } catch (err) {
  //   return err;
  // }
};
export const getPomen = async () => {};
// export getPokemons;

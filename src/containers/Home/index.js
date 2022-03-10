import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Searcher from "@components/Searcher";
import PokemonList from "@components/PokemonList";
import Loader from "@components/Loader";
// import { getPokemonWithDetails} from "../../actions"
import "./styles.css";
// import { get, toJS } from "immutable";
import { getPokemons } from "../../api/getPokemons";
import { fetchPokemonDetails, setErrors } from "../../actions";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.pokemon.get("list")).toJS();
  // console.log(list, "Home")
  const loading = useSelector((state) => state.ui.get("loading"));
  // console.log(loading)
  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(fetchPokemonDetails(res.results));
      })
      .catch((error) => {
        dispatch(setErrors({ header: error.code, content: error.where }));
      });
  }, [dispatch]);
  return (
    <div className="Home">
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;

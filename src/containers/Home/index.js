import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Searcher from "@components/Searcher";
import PokemonList from "@components/PokemonList";
import Loader from "@components/Loader";
import "./styles.css";
import { fetchPokemons } from "../../slices/pokemon";
import { setError } from "../../slices/ui";

function Home() {
  const list = useSelector((state) => state.pokemon.list);
  // console.log(list, "Home")
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  // console.log(loading)
  useEffect(() => {
    try {
      dispatch(fetchPokemons());
    } catch (error) {
      dispatch(setError({ header: error.code, content: error.where }));
    }
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

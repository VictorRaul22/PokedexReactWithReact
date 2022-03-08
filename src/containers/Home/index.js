import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Searcher from "@components/Searcher";
import PokemonList from "@components/PokemonList";
// import { getPokemonWithDetails} from "../../actions"
import "./styles.css";
import { getPokemons } from "../../api/getPokemons";
import { setErrors, setPokemonsWithDetails } from "../../actions";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(setPokemonsWithDetails(res.results));
      })
      .catch((error) => {
        dispatch(setErrors({ message: "Ocurrió un error", error }));
      });
  }, [dispatch]);
  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;

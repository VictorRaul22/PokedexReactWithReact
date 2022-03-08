/* eslint-disable react/no-array-index-key */
import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

function PokemonList({ pokemons }) {
  // window.console.log(pokemons)
  return (
    <div className="wrapper">
      <Grid className="PokemonsList">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={`pokemon-${index}`} pokemon={pokemon} />
        ))}
      </Grid>
    </div>
  );
}
PokemonList.defaultProps = {
  pokemons: [],
};

export default PokemonList;

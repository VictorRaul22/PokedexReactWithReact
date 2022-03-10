import React from "react";
import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR, GREY_COLOR } from "@utils/constants";
import { useDispatch } from "react-redux";
import "./styles.css";
import { setFavorite } from "../../slices/pokemon";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  };
  // console.log(pokemon.favorite)
  const color = pokemon.favorite ? FAV_COLOR : GREY_COLOR;
  if (!pokemon) return null;
  return (
    <Grid.Column movile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <button
          type="button"
          className="PokemonCard-favorite"
          onClick={handleFavorite}
        >
          <Icon name="favorite" color={color} />
        </button>
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <h2 className="PokemonCard-title">{pokemon.name}</h2>
        <Divider />
        {pokemon.types.map((type) => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
}

export default PokemonCard;

import React from "react";
import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "@utils/constants";
import "./styles.css";

function PokemonCard({ pokemon }) {
  return (
    <Grid.Column movile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR} />
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

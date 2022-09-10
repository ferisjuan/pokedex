import { Grid } from '@mantine/core';
import {Pokemon, PokemonList} from "../../interfaces";
import { PokemonCard } from '../pokemon-card';

interface PokemonsProps {
  pokemonList: PokemonList['results'];
}

export const PokemonsList: React.FC<PokemonsProps> = ({pokemonList: pokemons}) => {

  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <Grid.Col key={pokemon.name} sm={6} lg={3}>
          <PokemonCard url={pokemon.url} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

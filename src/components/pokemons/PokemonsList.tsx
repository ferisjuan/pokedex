import { Grid } from '@mantine/core';
import {Pokemon, PokemonList} from "../../interfaces";
import { AppCard } from '../app-card';

interface PokemonsProps {
  pokemons: PokemonList['results'];
}

export const PokemonsList: React.FC<PokemonsProps> = ({pokemons}) => {

  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <Grid.Col key={pokemon.name} sm={6} lg={3}>
          <AppCard url={pokemon.url} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

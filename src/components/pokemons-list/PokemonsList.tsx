import { Grid } from '@mantine/core';
import { PokemonList } from "../../interfaces";
import { PokemonCard } from '../pokemon-card';

interface PokemonsProps {
  pokemons: PokemonList['results'];
}

export const PokemonsList: React.FC<PokemonsProps> = ({pokemons}) => {
  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <Grid.Col key={pokemon.name} sm={6} >
          <PokemonCard url={pokemon.url} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

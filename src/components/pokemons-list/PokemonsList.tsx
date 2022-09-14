import { Grid } from '@mantine/core';
import { PokemonList } from "../../interfaces";
import { PokemonCard } from '../pokemon-card';

interface PokemonsProps {
  handleShowModal: (pokemonId: number) => void;
  pokemons: PokemonList['results'];
}

export const PokemonsList: React.FC<PokemonsProps> = ({pokemons, handleShowModal: setPokemonAttacks}) => {
  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <Grid.Col key={pokemon.name} sm={6} >
          <PokemonCard  handleShowModal={setPokemonAttacks} url={pokemon.url} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

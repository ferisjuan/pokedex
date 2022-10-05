import { Grid } from '@mantine/core';
import { Move, PokemonList } from "../../interfaces";
import { PokemonCard } from '../pokemon-card';

interface PokemonsProps {
  setPokemonMoves: (pokemonMoves: Move[]) => void;
  pokemons: PokemonList['results'];
  handleShowModal: (pokemonId: number) => void
}

export const PokemonsList: React.FC<PokemonsProps> = ({pokemons, setPokemonMoves, handleShowModal: setPokemonAttacks}) => {
  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <Grid.Col key={pokemon.name} sm={6} >
          <PokemonCard  handleShowModal={setPokemonAttacks} setPokemonMoves={setPokemonMoves} url={pokemon.url} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

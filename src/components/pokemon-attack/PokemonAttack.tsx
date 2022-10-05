import React from 'react';
import { Move } from '../../interfaces';

interface PokemonAttackProps {
  pokemonMoves: Move[]
}

export const PokemonAttack: React.FC<PokemonAttackProps> = ({ pokemonMoves }) => (
  <div>
    {
      pokemonMoves.map((pokemonMove) => (
        <h2>
          {pokemonMove.move.name}
        </h2>
      ))
    }
  </div>
)

import { fetcher } from '@/lib';
import React, { useEffect, useState } from 'react';
import { URLS } from "@/constants";

interface PokemonAttackProps{
  pokemonId: number | undefined
}

export const PokemonAttack: React.FC<PokemonAttackProps> = ({ pokemonId }) => {
  const [pokemonMoves, setPokemonMoves] = useState([]);
  
  useEffect(() => {
    async function fetch() {
      const data = await fetcher({ url: `${URLS.base}/pokemon/${pokemonId}` });
      setPokemonMoves(data.moves)
    }

    fetch();
  },[]);

  const moves = pokemonMoves.map((pokemonMove) => <h2>{pokemonMove.move.name}</h2> )

  return <div>{moves}</div>
}
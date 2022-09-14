import { useEffect, useState } from 'react';
import { Pokemon } from '../../interfaces';
import { fetcher } from '../../lib';

interface UseFetchPokemon {
  pokemon: Pokemon | undefined
}

export const useFetchPokemon = (url: string): UseFetchPokemon => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function fetchPokemon() {
      const _pokemon = await fetcher({ url });

      setPokemon(_pokemon);
    }

    fetchPokemon();
  }, []);

  return {
    pokemon
  }
}

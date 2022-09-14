import { Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { PokemonsList } from '../components';
import { URLS } from "../constants";
import { PokemonList } from "../interfaces";
import { fetcher } from "../lib";

const Pokemons: React.FC = () => {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState<string>();
  const [previous, setPrevious] = useState<string>();
  const [pokemonList, setPokemonList] = useState<PokemonList['results']>([]);

  useEffect(() => {
    async function fetch() {
      const data = await fetcher({url: `${URLS.base}/pokemon`});

      setCount(data.count);
      setNext(data.next);
      setPrevious(data.previous);
      setPokemonList(data.results);
    }

    fetch();
  }, []);

  return <Container>
    <PokemonsList pokemons={pokemonList}/>
  </Container>;
};

export default Pokemons;

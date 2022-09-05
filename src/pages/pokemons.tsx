import { Container } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { PokemonsList } from '../components';
import { URLS } from "../constants";
import { PokemonList } from "../interfaces";
import { fetcher } from "../lib";

const Pokemons: React.FC = () => {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState<string>();
  const [previous, setPrevious] = useState<string>();
  const [pokemons, setPokemons] = useState<PokemonList['results']>([]);

  const rerenderCount = useRef(0);
  console.log(
    "🚀🚀🚀 ~ file: pokemons.tsx ~ line 17 ~   rerenderCount.current",
    rerenderCount.current
  );

  rerenderCount.current += 1;

  useEffect(() => {
    async function fetch() {
      const res = await fetcher({url: `${URLS.base}/pokemon`});

      setCount(res.count);
      setNext(res.next);
      setPrevious(res.previous);
      setPokemons(res.results);
    }

    fetch();
  }, []);

  return <Container>
    <PokemonsList pokemons={pokemons}/>
  </Container>;
};

export default Pokemons;

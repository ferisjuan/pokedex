import {Text} from "@mantine/core";
import {useEffect, useState} from "react";
import { fetcher } from '../lib';

const Pokemons: React.FC = () => {
  const [count, setCount] = useState(0)
  const [next, setNext] = useState<string>()
  const [previous, setPrevious] = useState<string>()
  const [pokemons, setPokemons] = useState([]);
  console.log('🚀🚀🚀 ~ file: pokemons.tsx ~ line 10 ~ pokemons', pokemons)

  useEffect(() => {
    async function fetch() {
      const res = await fetcher({endpoint: 'pokemon'})

      setCount(res.count)
      setNext(res.next)
      setPrevious(res.previous)
      setPokemons(res.results)
    }

    fetch()
  },[])

  return <Text size="xl">Pokemons</Text>;
};

export default Pokemons;

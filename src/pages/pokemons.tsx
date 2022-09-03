import {Container, Text} from "@mantine/core";
import {useEffect, useState} from "react";
import { AppCard } from '../components';
import { URLS } from '../constants';
import { Result } from '../interfaces';
import {fetcher} from "../lib";

const Pokemons: React.FC = () => {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState<string>();
  const [previous, setPrevious] = useState<string>();
  const [pokemons, setPokemons] = useState<Result[]>([]);

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

  return (
    <Container>
      {/* {pokemons.map(pokemon => <AppCard />)} */}
    </Container>
  )
};

export default Pokemons;

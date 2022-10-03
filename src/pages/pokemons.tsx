import { PokemonAttack } from "@/components/pokemon-attack";
import { Container, Modal } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { PokemonsList } from '../components';
import { URLS } from "../constants";
import { Result } from "../interfaces";
import { fetcher } from "../lib";

const Pokemons: React.FC = () => {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState<string>();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [previous, setPrevious] = useState<string>();
  const [pokemonList, setPokemonList] = useState<Result[]>([]);
  const [pokemonId, setPokemonId] = useState<number>()

  useEffect(() => {
    async function fetch() {
      const data = await fetcher({ url: `${URLS.base}/pokemon` });

      setCount(data.count);
      setNext(data.next);
      setPrevious(data.previous);
      setPokemonList(data.results);
    }

    fetch();
  }, []);

  const handleShowModal = useCallback((_pokemonId: number) => {
    setIsModalVisible(true)
    setPokemonId(_pokemonId)
  }, [isModalVisible, pokemonId])

  return <Container>
    <PokemonsList
      handleShowModal={handleShowModal}
      pokemons={pokemonList}
    />

    <Modal
      onClose={() => setIsModalVisible(false)}
      opened={isModalVisible}
    >
      <h1>{pokemonId}</h1>

      <PokemonAttack pokemonId={pokemonId} />
    </Modal>
  </Container>;
};

export default Pokemons;

import {Card, Group, Image, Text} from "@mantine/core";
import {useEffect, useState} from "react";
import {Pokemon} from "../../interfaces";
import {fetcher} from "../../lib";
import {PokemonType} from "../pokemon-type";

interface AppCardProps {
  url: string;
}

export const AppCard: React.FC<AppCardProps> = ({url}) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function fetchPokemon() {
      const _pokemon = await fetcher({url});

      setPokemon(_pokemon);
    }

    fetchPokemon();
  }, []);

  if (!pokemon) return null;

  return (
    <Card p="lg" radius="md" shadow="sm" sx={{minHeight: "340px"}} withBorder>
      <Card.Section>
        <Image
          alt={pokemon.name}
          width={160}
          src={pokemon?.sprites.front_default}
        />
      </Card.Section>

      <Text weight={500}>{pokemon.name}</Text>

      <Group mb="xs" mt="md" position="left" spacing="xs">
        {pokemon.types.map(({type}) => (
          <PokemonType key={type.name} type={type.name} />
        ))}
      </Group>

      <Text size="sm" color="dimmed">
        pokemon stats, height width, attacks
      </Text>
    </Card>
  );
};

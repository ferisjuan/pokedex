import {Badge, Button, Card, Group, Image, Text} from "@mantine/core";
import {useEffect, useId, useState} from "react";
import {Pokemon} from "../../interfaces";
import {fetcher} from "../../lib";

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
    <Card
      p="lg"
      radius="md"
      shadow="sm"
      sx={{ minHeight: '320px' }}
      withBorder
    >
      <Card.Section>
        <Image
          alt={pokemon.name}
          height={160}
          width={160}
          src={pokemon?.sprites.front_default}
        />
      </Card.Section>

      <Group position="left" mt="md" mb="xs">
        <Text weight={500}>{pokemon.name}</Text>

        {pokemon.types.map((type) => (
          <Badge color="pink" key={Math.random()} variant="filled">
            {type.type.name}
          </Badge>
        ))}
      </Group>

      <Text size="sm" color="dimmed">
        pokemon stats, height width, attacks
      </Text>
    </Card>
  );
};

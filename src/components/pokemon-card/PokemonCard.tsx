// @vendors
import { Card, Group, Image, Table, Text } from "@mantine/core";
import {useEffect, useMemo, useRef, useState} from "react";

// @interfaces
import {Pokemon} from "../../interfaces";

// @lib
import {fetcher, keygen} from "../../lib";

// @types
import {PokemonType} from "../pokemon-type";

interface AppCardProps {
  url: string;
}

export const PokemonCard: React.FC<AppCardProps> = ({url}) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function fetchPokemon() {
      const _pokemon = await fetcher({url});

      setPokemon(_pokemon);
    }

    fetchPokemon();
  }, []);

  const stats = pokemon?.stats;
  const statsTHeader = useMemo(() => {
    if (!stats) return;

    return stats.map(({stat}) => stat.name);
  }, [stats]);

  const statsRow = useMemo(() => {
    if (!stats) return;

    return stats.map(({base_stat, effort}) => ({
      base_stat,
      effort,
    }));
  }, [stats]);

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
      <Group>
        <Table>
          <thead>
            <tr>
              {statsTHeader?.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {statsRow?.map((stat) => (
                <td key={keygen(stat)}>
                  {stat.base_stat} - {stat.effort}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Group>
      <Text size="sm" color="dimmed">
        pokemon stats, height width, attacks
      </Text>
    </Card>
  );
};

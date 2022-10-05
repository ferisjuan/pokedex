// @vendors
import { Card, Group, Image, Text } from "@mantine/core";

// @hooks
import { useFetchPokemon } from './useFetchPokemon';

// @lib
import { PokemonStats } from '../pokemon-stats';

// @types
import { PokemonType } from "../pokemon-type";
import { Move } from '../../interfaces';

interface AppCardProps {
  handleShowModal: (PokemonId: number) => void;
  setPokemonMoves: (pokemonMoves: Move[]) => void;
  url: string;
}

export const PokemonCard: React.FC<AppCardProps> = ({ handleShowModal, setPokemonMoves, url }) => {
  const { pokemon } = useFetchPokemon(url)

  if (!pokemon) return null;

  setPokemonMoves(pokemon.moves)

  return (
    <Card
      onClick={() => handleShowModal(pokemon.id)}
      p="lg"
      radius="md"
      shadow="sm"
      sx={{ minHeight: "340px" }}
      withBorder
      >
      <Card.Section>
        <Image
          alt={pokemon.name}
          width={160}
          src={pokemon?.sprites.front_default}
        />
      </Card.Section>

      <Text weight={500}>{pokemon.name}</Text>

      <Group
        mb="xs"
        mt="md"
        position="left"
        spacing="xs"
        >
        {pokemon.types.map(({ type }) => (
          <PokemonType key={type.name} type={type.name} />
        ))}
      </Group>

      <Group>
        <PokemonStats stats={pokemon.stats} />
      </Group>

      <Text size="sm" color="dimmed">
        pokemon stats, height width, attacks
      </Text>
    </Card>
  );
};

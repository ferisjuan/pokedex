import {Badge, Button, Card, Group, Image, Text} from "@mantine/core";
import {useEffect, useState} from "react";
import {Pokemon} from "../../interfaces";
import {fetcher} from "../../lib";

interface AppCardProps {
  name: string;
  url: string;
}

export const AppCard: React.FC<AppCardProps> = ({name, url}) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function fetchPokemon() {
      const _pokemon = await fetcher({url});

      setPokemon(_pokemon)
    }

    fetchPokemon()
  }, []);

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        {/* <Image src={image.src} height={160} alt={image.alt} /> */}
      </Card.Section>

      {/* <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>

        {badge && (
          <Badge color="pink" variant="light">
            {badge}
          </Badge>
        )}
      </Group>

      <Text size="sm" color="dimmed">
        {body}
      </Text>

      {button?.action && button.title && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          onClick={button?.action}
          radius="md"
        >
          {button?.title}
        </Button> */}
      {/* )} */}
    </Card>
  );
};

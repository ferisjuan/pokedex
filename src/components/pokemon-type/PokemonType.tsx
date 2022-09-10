import {Badge} from "@mantine/core";
import {POKEMON_TYPES} from "../../enums";
import {typeIcon} from "./TypeIcon";
import {PokemonTypes} from "./types";

interface AppBadgeProps {
  type: string;
}

export const PokemonType: React.FC<AppBadgeProps> = ({type}) => (
    <Badge
      color={PokemonTypes[type as keyof typeof POKEMON_TYPES].color}
      fullWidth
      leftSection={typeIcon(
        PokemonTypes[type as keyof typeof POKEMON_TYPES].color,
        PokemonTypes[type as keyof typeof POKEMON_TYPES].icon
      )}
      radius="sm"
      size="md"
      variant="outline"
    >
      {type}
    </Badge>
);

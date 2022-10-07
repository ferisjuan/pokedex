import React from "react";
import { Carousel } from "@mantine/carousel";
import { Move } from "../../interfaces";

interface PokemonAttackProps {
  pokemonMoves: Move[];
}

export const PokemonAttack: React.FC<PokemonAttackProps> = ({
  pokemonMoves,
}) => (
  <Carousel
  sx={{ maxWidth: 320 }}
  mx="auto"
  withIndicators
  height={200}
  dragFree
  slideGap="md"
  align="start"
  >
    {pokemonMoves.map((pokemonMove) => (
        <Carousel.Slide>{pokemonMove.move.name}</Carousel.Slide>
    ))}
  </Carousel>
);

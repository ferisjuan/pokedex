// @vendors
import {MantineColor} from "@mantine/core";
import {IconType} from "react-icons";
import {BsQuestionDiamond} from "react-icons/bs";
import {FaDragon} from "react-icons/fa";
import {
  GiAlienBug,
  GiElectric,
  GiFairyWings,
  GiFire,
  GiFlyingTarget,
  GiGhost,
  GiGroundbreaker,
  GiHighGrass,
  GiIceCube,
  GiPoisonBottle,
  GiPsychicWaves,
  GiRockGolem,
  GiShadowGrasp,
  GiStarfighter,
  GiSteelwingEmblem,
  GiWaterBolt,
} from "react-icons/gi";
import {MdDarkMode} from "react-icons/md";
import {RiEmotionNormalLine} from "react-icons/ri";

// @enums
import {POKEMON_TYPES} from "../../enums";

type Type = {
  color: MantineColor;
  icon: IconType;
};

export const PokemonTypes: Record<keyof typeof POKEMON_TYPES, Type> = {
  bug: {
    color: "teal",
    icon: GiAlienBug,
  },
  dark: {
    color: "gray",
    icon: MdDarkMode,
  },
  dragon: {
    color: "red",
    icon: FaDragon,
  },
  electric: {
    color: "yellow",
    icon: GiElectric,
  },
  fairy: {
    color: "cyan",
    icon: GiFairyWings,
  },
  fighting: {
    color: "violet",
    icon: GiStarfighter,
  },
  fire: {
    color: "red",
    icon: GiFire,
  },
  flying: {
    color: "indigo",
    icon: GiFlyingTarget,
  },
  ghost: {
    color: "gray",
    icon: GiGhost,
  },
  grass: {
    color: "green",
    icon: GiHighGrass,
  },
  ground: {
    color: "gray",
    icon: GiGroundbreaker,
  },
  ice: {
    color: "cyan",
    icon: GiIceCube,
  },
  normal: {
    color: "gray",
    icon: RiEmotionNormalLine,
  },
  poison: {
    color: "lime",
    icon: GiPoisonBottle,
  },
  psychic: {
    color: "grape",
    icon: GiPsychicWaves,
  },
  rock: {
    color: "yellow",
    icon: GiRockGolem,
  },
  shadow: {
    color: "gray",
    icon: GiShadowGrasp,
  },
  steel: {
    color: "gray",
    icon: GiSteelwingEmblem,
  },
  unknown: {
    color: "pink",
    icon: BsQuestionDiamond,
  },
  water: {
    color: "blue",
    icon: GiWaterBolt,
  },
};

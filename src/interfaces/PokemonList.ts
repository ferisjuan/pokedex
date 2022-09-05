export interface PokemonList {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Result[];
}

interface Result {
  name: string;
  url:  string;
}

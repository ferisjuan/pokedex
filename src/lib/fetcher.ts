const BASE_URL = "https://pokeapi.co/api/v2";

interface FetcherProps {
  endpoint: string;
}

export const fetcher = async ({endpoint}: FetcherProps) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  const data = await res.json();

  return data;
};

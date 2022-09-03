interface FetcherProps {
  url: string;
}

export const fetcher = async ({url}: FetcherProps) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

import {AppShell, Header, MantineProvider, Text} from "@mantine/core";
import Pokemons from "./pages/pokemons";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <Text size="xl">Pokedex</Text>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Pokemons />
      </AppShell>
    </MantineProvider>
  );
}

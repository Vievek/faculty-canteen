import { Stack } from "expo-router";
import { FavoritesProvider } from "./context/FavouriteContext";

export default function Layout() {
  return (
    <FavoritesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </FavoritesProvider>
  );
}

import { Stack } from 'expo-router';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function RootLayout() {
    
  const [loaded] = useFonts({
    BebasNeue: BebasNeue_400Regular,
  });

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="venue/[id]" options={{ title: 'Venue' }} />
    </Stack>
  );
}
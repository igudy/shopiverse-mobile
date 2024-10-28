import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native'; // Import ActivityIndicator

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // Metropolis Regular Font
    'Metropolis-Regular': require('../assets/fonts/Metropolis-Regular.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-ExtraBold': require('../assets/fonts/Metropolis-ExtraBold.otf'),
    'Metropolis-ExtraLightItalic': require('../assets/fonts/Metropolis-ExtraLightItalic.otf'),
    'Metropolis-LightItalic': require('../assets/fonts/Metropolis-LightItalic.otf'),
    'Metropolis-BoldItalic': require('../assets/fonts/Metropolis-BoldItalic.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    // Show a circular loading indicator while fonts are loading
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
});

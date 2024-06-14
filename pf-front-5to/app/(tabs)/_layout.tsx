import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import "react-native-reanimated";
import RootNavigator from "./navigation/RootNavigator";

import { useColorScheme } from "@/hooks/useColorScheme";
import HomeScreen from ".";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: "../assets/fonts/SpaceMono-Regular.ttf",
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <HomeScreen />
      <View style={styles.footer}>
        {["Home", "Búsqueda", "Reservas", "Favoritos", "Perfil"].map(
          (label, index) => (
            <TouchableOpacity key={index} style={styles.footerButton}>
              <Text>{label}</Text>
            </TouchableOpacity>
          ) 
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  footerButton: {
    alignItems: "center",
  },
});

import { SplashScreen, Stack } from "expo-router";

import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require('../assets/fonts/Lato-Bold.ttf'),
    "Lato-SemiBold": require('../assets/fonts/Lato-SemiBold.ttf'),
    "Lato-ExtraBold": require('../assets/fonts/Lato-ExtraBold.ttf'),
    "Lato-Regular": require('../assets/fonts/Lato-Regular.ttf'),
    "Lato-Light": require('../assets/fonts/Lato-Light.ttf'),
    "Lato-ExtraLight": require('../assets/fonts/Lato-ExtraLight.ttf'),
    "Lato-Medium": require('../assets/fonts/Lato-Medium.ttf'),
    "Lato-Thin": require('../assets/fonts/Lato-Thin.ttf'),
    "Lato-Black": require('../assets/fonts/Lato-Black.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return <Stack />;
}

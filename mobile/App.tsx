import {
  useFonts as useFraunces,
  Fraunces_600SemiBold,
  Fraunces_700Bold,
} from "@expo-google-fonts/fraunces";
import {
  useFonts as useOutfit,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";
import {
  useFonts as useNewsreader,
  Newsreader_400Regular,
} from "@expo-google-fonts/newsreader";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./src/navigation/RootNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [frauncesLoaded] = useFraunces({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
  });
  const [outfitLoaded] = useOutfit({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
  });
  const [newsreaderLoaded] = useNewsreader({ Newsreader_400Regular });

  const allLoaded = frauncesLoaded && outfitLoaded && newsreaderLoaded;

  useEffect(() => {
    if (allLoaded) SplashScreen.hideAsync();
  }, [allLoaded]);

  if (!allLoaded) return null;

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

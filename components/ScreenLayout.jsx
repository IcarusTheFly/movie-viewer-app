import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

export default function ScreenLayout({children}) {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      {children}
    </SafeAreaProvider>
  );
}

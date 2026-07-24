import { Stack } from "expo-router";
import "../../global.css";
import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { ThemeProvider, useTheme } from "@/providers/ThemProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

function AppLayout() {
  const colors = useTheme();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.card }}
      edges={["top", "left", "right"]}
    >
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AppLayout />
        </ThemeProvider>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

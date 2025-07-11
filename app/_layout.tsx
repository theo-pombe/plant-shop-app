import AuthProvider from "@/context/auth/authProvider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
            headerTintColor: "#34A853",
          }}
        >
          <Stack.Screen name="index" options={{ title: "Welcome" }} />
          <Stack.Screen name="login" options={{ title: "Login" }} />
          <Stack.Screen name="signup" options={{ title: "Signup" }} />
          <Stack.Screen name="+not-found" options={{ title: "NotFound" }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

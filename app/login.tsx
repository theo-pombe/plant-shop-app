import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-y-24 bg-white">
      <View>
        <Text className="font-semibold text-2xl text-emerald-700">Login</Text>
      </View>

      <View className="flex flex-row gap-x-2">
        <Text>Don't have an account?</Text>
        <Link href="/signup" className="text-blue-400 underline">
          Sign Up
        </Link>
      </View>
    </SafeAreaView>
  );
}

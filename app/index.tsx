import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-y-24 bg-white">
      <View>
        <Text className="font-semibold text-xl text-emerald-700">
          Onboard screen.
        </Text>
      </View>

      <View className="flex flex-row gap-x-12">
        <Link href="/login" className="text-blue-400">
          Continue
        </Link>

        <Link href="/(tabs)/home" className="text-gray-700">
          Skip
        </Link>
      </View>
    </SafeAreaView>
  );
}

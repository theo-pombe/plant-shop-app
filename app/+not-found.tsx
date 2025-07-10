import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-y-24 bg-white">
      <View>
        <Text className="font-semibold text-xl text-emerald-700">
          Page Not Found
        </Text>
      </View>

      <View>
        <Link href="/" className="text-blue-400">
          Go back
        </Link>
      </View>
    </SafeAreaView>
  );
}

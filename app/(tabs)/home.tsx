import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-y-24 bg-white">
      <View>
        <Text className="font-semibold text-xl text-emerald-700">Home</Text>
      </View>
    </SafeAreaView>
  );
}

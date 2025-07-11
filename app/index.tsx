import SkipButton from "@/components/SkipButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const PlantWhile = require("@/assets/images/plant-white-41021.jpg");

export default function OnboardScreen() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.1, { duration: 800 }),
      -1, // infinite
      true // reverse animation
    );
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-y-8 bg-white px-8 py-8">
      <SkipButton />

      <View>
        <Image source={PlantWhile} style={styles.image} />
      </View>

      <View>
        <View className="mb-8">
          <Text className="font-semibold text-3xl text-slate-800 tracking-wide max-w-[21rem]">
            Bring nature into your life with{" "}
            <Text className="text-lime-500">beautiful plants</Text>
          </Text>
        </View>

        <View className="items-center justify-center">
          <Animated.View
            style={animatedStyle}
            className="bg-lime-600 h-16 w-16 rounded-full items-center justify-center"
          >
            <TouchableOpacity onPress={() => router.replace("/login")}>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 360,
  },
});

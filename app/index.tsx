import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const PlantWhile = require("@/assets/images/plant-white-41021.jpg");

export default function OnboardScreen() {
  const [showSkip, setShowSkip] = useState(false);
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.1, { duration: 800 }),
      -1, // infinite
      true // reverse animation
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-y-8 bg-white px-8 py-8">
      {showSkip && (
        <View className="absolute right-8 top-14">
          <Link
            href="/(tabs)/home"
            className="text-gray-700 text-lg text-right"
          >
            Skip
          </Link>
        </View>
      )}

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
            <Link href="/login">
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </Link>
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

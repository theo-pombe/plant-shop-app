import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SkipButton() {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      {showSkip && (
        <View className="absolute right-8 top-14">
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)/home")}
            className="text-gray-700 text-lg text-right"
          >
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

import LogoutButton from "@/components/LogoutButton";
import { useAuth } from "@/context/auth/authContext";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { user } = useAuth();

  const profileImage = user?.photoURL || "https://i.pravatar.cc/150?img=12"; // fallback avatar

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user]);

  if (user === null) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#f43f5e" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-4">
        {/* Profile Picture */}
        <Image
          source={{ uri: profileImage }}
          style={{
            width: 128,
            height: 128,
            borderRadius: 64,
            borderWidth: 2,
            borderColor: "#ccc",
          }}
          contentFit="cover"
          transition={300}
          className=""
        />

        {/* User Info */}
        <Text className="mt-6 text-2xl font-bold text-gray-800">Profile</Text>
        <Text className="mt-2 text-gray-600 text-center">
          Welcome, {user.displayName || user.email}
        </Text>
      </View>

      {/* Logout Button */}
      <View className="px-4 pb-8">
        <LogoutButton />
      </View>
    </SafeAreaView>
  );
}

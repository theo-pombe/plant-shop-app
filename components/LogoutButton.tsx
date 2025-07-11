import { useAuth } from "@/context/auth/authContext";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Text, TouchableOpacity } from "react-native";

export default function LogoutButton() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleConfirmLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Log Out",
          style: "destructive",
          onPress: async () => {
            setLoading(true);
            try {
              await logout();
              router.replace("/login");
            } catch (error: any) {
              console.error("Logout error:", error.message);
            } finally {
              setLoading(false);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity
      onPress={handleConfirmLogout}
      disabled={loading}
      className="py-4 rounded-2xl bg-red-500 mt-6"
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-center text-white font-semibold text-base">
          Log Out
        </Text>
      )}
    </TouchableOpacity>
  );
}

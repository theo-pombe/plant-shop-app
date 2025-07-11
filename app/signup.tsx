import FormButton from "@/components/FormButton";
import SkipButton from "@/components/SkipButton";
import { useAuth } from "@/context/auth/authContext";
import { isValidEmail } from "@/utils/validators";
import { AntDesign, FontAwesome } from "@expo/vector-icons"; // For Google
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      await signup(name, email, password);
      router.replace("/(tabs)/home");
    } catch (error: any) {
      Alert.alert("Signup Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center gap-y-16 bg-white px-8">
      <SkipButton />

      {/* Header */}
      <View className="justify-center items-center gap-y-1">
        <Text className="text-xl font-semibold">
          Plants <Text className="text-rose-600">Fresher</Text>
        </Text>
        <Text className="text-3xl text-gray-600 font-semibold">
          Create Account
        </Text>
      </View>

      {/* Form */}
      <View>
        {/* Name Field */}
        <View className="flex-row items-center gap-x-1 px-3 py-1 bg-gray-50 border border-slate-200 rounded-2xl mb-5">
          <Ionicons name="person-outline" size={24} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#9CA3AF"
            className="flex-1"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email Field */}
        <View className="flex-row items-center gap-x-1 px-3 py-1 bg-gray-50 border border-slate-200 rounded-2xl mb-5">
          <Ionicons name="mail-outline" size={24} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            className="flex-1"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          {isValidEmail(email) && (
            <Ionicons name="checkmark-circle" color="green" size={24} />
          )}
        </View>

        {/* Password Field */}
        <View className="flex-row items-center gap-x-1 px-3 py-1 bg-gray-50 border border-slate-200 rounded-2xl mb-3">
          <Ionicons name="lock-closed-outline" size={24} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            className="flex-1"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons
              name={passwordVisible ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="#6B7280"
            />
          </Pressable>
        </View>

        <FormButton title="Sign Up" onPress={handleSignUp} loading={loading} />
      </View>

      {/* Social Sign Up */}
      <View className="gap-y-4">
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-slate-300" />
          <Text className="mx-3 text-gray-500 text-sm font-medium">
            or sign up with
          </Text>
          <View className="flex-1 h-px bg-slate-300" />
        </View>

        {/* Continue with Google */}
        <TouchableOpacity className="flex-row items-center justify-center gap-x-3 bg-white border border-slate-200 rounded-2xl py-3 w-full">
          <AntDesign name="google" size={20} color="#34A853" />
          <Text className="text-base font-medium text-gray-800">
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Continue with Apple */}
        <TouchableOpacity className="flex-row items-center justify-center gap-x-3 bg-white border border-slate-200 rounded-2xl py-3 w-full">
          <FontAwesome name="apple" size={22} color="#000" />
          <Text className="text-base font-medium text-gray-800">
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="absolute bottom-20 right-0 left-0">
        <Text className="text-gray-600 text-center font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-rose-400 font-semibold">
            Log In
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

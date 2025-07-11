import { auth } from "@/FirebaseConfig";
import * as SecureStore from "expo-secure-store";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./authContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    setUser(userCredentials.user);

    await SecureStore.setItemAsync(
      "user",
      JSON.stringify({
        uid: userCredentials.user.uid,
        email: userCredentials.user.email,
        displayName: userCredentials.user.displayName,
      })
    );
  };

  const signup = async (name: string, email: string, password: string) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredentials.user, {
      displayName: name,
    });

    setUser(userCredentials.user);
    await SecureStore.setItemAsync(
      "user",
      JSON.stringify(userCredentials.user)
    );
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    await SecureStore.deleteItemAsync("user");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe; // Clean up on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"/login"} asChild>
        <Text>Get Started</Text>
      </Link>
    </View>
  );
}

import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"/login"} asChild>
        <Text>Get Started</Text>
      </Link>
    </View>
  );
}

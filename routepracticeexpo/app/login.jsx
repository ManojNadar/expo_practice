import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

export default function login() {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>login</Text>

      <TextInput placeholder="Enter Email" />
      <TextInput placeholder="Enter password" secureTextEntry={true} />

      <Link href={"/(drawer)/Home"} asChild>
        <Button title="Login" />
      </Link>
      <Link href={"/register"} asChild>
        <Text>New User ? Register</Text>
      </Link>
    </View>
  );
}

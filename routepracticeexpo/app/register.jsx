import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

export default function register() {
  return (
    <View>
      <Text>register</Text>

      <TextInput placeholder="Enter Name" />
      <TextInput placeholder="Enter Email" />
      <TextInput placeholder="Enter password" secureTextEntry={true} />

      <Link href={"/login"} asChild>
        <Button title="Register" />
      </Link>
      <Link href={"/login"} asChild>
        <Text>Already an User ? Login</Text>
      </Link>
    </View>
  );
}

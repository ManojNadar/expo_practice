import { View, Text } from "react-native";
import React from "react";

const CustomBottomTabs = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Text>Search</Text>
      <Text>Notification</Text>
      <Text>Cart</Text>
    </View>
  );
};

export default CustomBottomTabs;

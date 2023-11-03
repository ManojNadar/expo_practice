import React from "react";
import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";

export default function _layout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
      //   for custom content

      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "f4f4f4",
                borderBottomWidth: 2,
                paddingBottom: 12,
              }}
            ></View>

            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          //   headerShown: false,
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen name="Trending" />
      <Drawer.Screen name="profile" />
      <Drawer.Screen name="logout" />
    </Drawer>
  );
}

import React from "react";
import { Stack } from "expo-router";
import FoodContext from "./Context/FoodContext";

const _layout = () => {
  return (
    <FoodContext>
      <Stack>
        <Stack.Screen name="./app/index.js" />
      </Stack>
    </FoodContext>
  );
};

export default _layout;

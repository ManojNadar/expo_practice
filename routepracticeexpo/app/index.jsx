import React from "react";
import { Redirect } from "expo-router";
import FoodContext from "../Context/FoodContext";
export default function index() {
  return (
    <FoodContext>
      <Redirect href={"/login"} />;
    </FoodContext>
  );
}

// // "entryPoint": "./app/index.js",

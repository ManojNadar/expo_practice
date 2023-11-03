import React from "react";
import { Redirect } from "expo-router";

export default function logout() {
  return <Redirect href={"/login"} />;
}

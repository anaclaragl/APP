import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stacknavigator.routes";
import Stack1Navigator from "./home.routes"
import { useAuth } from "../hook/auth"

export default function Routes() {
  const { access_token } = useAuth();
  return (
    <NavigationContainer>
      {access_token ? <Stack1Navigator /> : <StackNavigator />}
    </NavigationContainer>
  );
}
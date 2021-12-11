import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro, Login } from '../pages'
import { InitStackParamList } from "../types/ScreeStack.types";

const Stack = createStackNavigator<InitStackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
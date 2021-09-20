import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Cadastro, Login, Profile, PetP, TimeLine, ONG, Mensagem, Criar, Camera } from '../pages'
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
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PetP" component={PetP} />
      <Stack.Screen name="TimeLine" component={TimeLine} />
      <Stack.Screen name="ONG" component={ONG} />
      <Stack.Screen name="Mensagem" component={Mensagem} />
      <Stack.Screen name="Criar" component={Criar} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
}

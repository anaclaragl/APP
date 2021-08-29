import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Cadastro, Login, Profile, PetP} from '../pages'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator headerMode={"none"}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PetP" component={PetP} />
        </Stack.Navigator>
    );
  }
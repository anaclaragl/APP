import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Profile, PetP, TimeLine, ONG, Mensagem, Criar, Camera } from '../pages'
import { InitStackParamList } from "../types/homestack.types";

const Stack1 = createStackNavigator<InitStackParamList>();

export default function App() {
    return (
        <Stack1.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack1.Screen name="Profile" component={Profile} />
            <Stack1.Screen name="PetP" component={PetP} />
            <Stack1.Screen name="TimeLine" component={TimeLine} />
            <Stack1.Screen name="ONG" component={ONG} />
            <Stack1.Screen name="Mensagem" component={Mensagem} />
            <Stack1.Screen name="Criar" component={Criar} />
            <Stack1.Screen name="Camera" component={Camera} />
        </Stack1.Navigator>
    );
}
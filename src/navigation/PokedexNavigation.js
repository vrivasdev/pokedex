import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PokedexNavigation" component={PokedexScreen} />
            <Stack.Screen name="PokemonNavigation" component={PokemonScreen} />
        </Stack.Navigator>
    )
}
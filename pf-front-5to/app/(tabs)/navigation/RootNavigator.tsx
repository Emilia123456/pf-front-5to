import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../index';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de ejemplo</Text>
    </View>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Búsqueda" component={PlaceholderScreen} />
        <Tab.Screen name="Reservas" component={PlaceholderScreen} />
        <Tab.Screen name="Favoritos" component={PlaceholderScreen} />
        <Tab.Screen name="Perfil" component={PlaceholderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
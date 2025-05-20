import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

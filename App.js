import React from 'react';
import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails'; // Example: Product details screen
import getdataa from "./getdataa";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsList" component={ProductsList} options={{ title: 'Products List' }}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={({ route }) => ({ title: route.params.product.title })}/>
        <Stack.Screen name="Gestdata" component={getdataa} options={{ title: 'Post List' }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

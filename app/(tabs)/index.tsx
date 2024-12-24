import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from '../screens/CartContext';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import BurgerScreen from '../screens/BurgerScreen';
import WrapScreen from '../screens/WrapScreen';
import DrinkScreen from '../screens/DrinkScreen';
import DessertScreen from '../screens/DessertScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import { Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  BurgerScreen: undefined;
  WrapScreen: undefined;
  DrinkScreen: undefined;
  DessertScreen: undefined;
  CartScreen: undefined;
  CheckoutScreen: undefined;
  AboutScreen: undefined;
  OrderConfirmationScreen: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
};

// Define the Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <CartProvider>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="AboutScreen" component={AboutScreen} />
          <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
          <Stack.Screen name="WrapScreen" component={WrapScreen} />
          <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
          <Stack.Screen name="DessertScreen" component={DessertScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
          <Stack.Screen name="OrderConfirmationScreen" component={OrderConfirmationScreen} />
        </Stack.Navigator>
    </CartProvider>
  );
};

export default App;

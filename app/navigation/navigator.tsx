import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckoutScreen from '../screens/CheckoutScreen';// Update the path as per your project structure
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import SignUpScreen from '../screens/SignUpScreen'; // Optional if you have a home screen
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../../types';

const Stack = createStackNavigator<RootStackParamList>();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CheckoutScreen">
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="OrderConfirmationScreen" component={OrderConfirmationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

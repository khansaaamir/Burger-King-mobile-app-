import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckoutScreen from '../screens/CheckoutScreen'; // Update the path as per your project structure
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../../types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{ headerShown: false }} // Consistent header options
            >
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
                <Stack.Screen name="OrderConfirmationScreen" component={OrderConfirmationScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
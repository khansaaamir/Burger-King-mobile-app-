import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock credentials for validation
    const validEmail = 'test@example.com';
    const validPassword = 'password123';

    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password fields.');
      return;
    }

    if (email === validEmail && password === validPassword) {
      Alert.alert('Success', 'You have successfully logged in!', [
        { text: 'OK', onPress: () => navigation.replace('HomeScreen') },
      ]);
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Ionicons name="arrow-back" size={24} color="#6c352a" style={styles.icon} />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Burger_King_2020_logo.svg' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => Alert.alert('Reset Password', 'Password reset link sent!')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5e7d3', // Soft cream background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 90,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#4A2605',
    marginBottom: 5,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f5e7d3',
    borderRadius: 5,
    shadowColor: '#f5e7d3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    fontWeight: 'bold'
  },
  backButtonText: {
    color: '#D62300',
    fontSize: 39,
    fontWeight: '600',
  },
  
  subtitle: {
    fontSize: 18,
    color: '#6D4C41',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6D4C41',
    marginBottom: 7,
  },
  input: {
    height: 50,
    borderColor: '#6D4C41',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#4A2605',
    backgroundColor: '#FFFFFF',
    shadowColor: '#6D4C41',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3, // subtle elevation for depth
  },
  button: {
    backgroundColor: '#D62300',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#D62300',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4, // button depth
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
  forgotPassword: {
    color: '#D62300',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 25,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#6D4C41',
  },
  signupLink: {
    fontSize: 16,
    color: '#D62300',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});


export default LoginScreen;

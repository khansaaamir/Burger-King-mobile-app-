import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Proceed with signup logic
    Alert.alert('Success', 'Account created successfully!');
    navigation.replace('HomeScreen'); // Navigate back to LoginScreen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.replace('LoginScreen')} // Close and go back to LoginScreen
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      {/* Burger King Logo */}
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Burger_King_2020_logo.svg',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5e7d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: '#D62300',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A2605',
  },
  subtitle: {
    fontSize: 18,
    color: '#4A2605',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A2605',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#4A2605',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#4A2605',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#D62300',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: '#4A2605',
  },
  loginLink: {
    fontSize: 16,
    color: '#D62300',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;

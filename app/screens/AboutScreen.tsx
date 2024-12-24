import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Page Header */}
      <Header title="About Us" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Burger King Logo */}
        <Image
          source={require('../../assets/burger-king-logo.png')} // Updated to access from assets
          style={styles.logo}
        />

        {/* Heading */}
        <Text style={styles.heading}>Welcome to Burger King</Text>

        {/* Description Text */}
        <Text style={styles.text}>
          At Burger King, we take pride in serving the best burgers, fries, and beverages for all our valued customers.
          Our goal is to deliver tasty food, fast service, and a comfortable experience.
        </Text>
        <Text style={styles.text}>
          We are committed to using fresh ingredients, flame-grilling our burgers to perfection, and offering a wide
          variety of menu options to satisfy everyone’s cravings.
        </Text>
        <Text style={styles.text}>
          Thank you for choosing Burger King, where taste is king. We hope you enjoy your experience and look forward
          to serving you again soon!
        </Text>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#FF4500',
  },
  text: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 15,
    textAlign: 'justify',
    lineHeight: 24,
  },
});

export default AboutScreen;

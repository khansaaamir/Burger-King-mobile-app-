// src/components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Burger King. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
  },
  footerText: {
    color: '#E0E0E0',
    fontSize: 14,
  },
});

export default Footer;

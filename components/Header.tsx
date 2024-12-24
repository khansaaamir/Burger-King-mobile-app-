import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Back Button */}
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" style={styles.icon} />
        </TouchableOpacity>
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Cart and Profile Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Ionicons name="cart" size={24} color="#FF4500" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Ionicons name="person-circle" size={24} color="#FF4500" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6c352a',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Header;

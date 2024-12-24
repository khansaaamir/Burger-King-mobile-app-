import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName: string) => {
    navigation.navigate(screenName as never);
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Ionicons name="cart-outline" size={28} color="#FF8C28" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Ionicons name="person-circle-outline" size={28} color="#FF8C28" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image
        source={require('../../assets/burger-king-logo.png')}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.exploreMenuText}>Explore Our Menu</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#5A2D18"
      />

      {/* Categories Heading */}
      <Text style={styles.categoryHeading}>Categories</Text>

      {/* Categories Grid */}
      <View style={styles.gridContainer}>
        {/* Burgers */}
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => handleNavigation('BurgerScreen')}
        >
          <Image
            source={require('../../assets/burgers-category.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Burgers</Text>
        </TouchableOpacity>

        {/* Wraps */}
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => handleNavigation('WrapScreen')}
        >
          <Image
            source={require('../../assets/wraps-category.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Wraps</Text>
        </TouchableOpacity>

        {/* Desserts */}
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => handleNavigation('DessertScreen')}
        >
          <Image
            source={require('../../assets/desserts-category.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Desserts</Text>
        </TouchableOpacity>

        {/* Drinks */}
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => handleNavigation('DrinkScreen')}
        >
          <Image
            source={require('../../assets/beverages-category.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Drinks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3E5', // Light beige background
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    backgroundColor: '#6c352a',
    marginTop: 0,
    padding: 10
  },
  icon: {
    marginLeft: 15,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  exploreMenuText: {
    fontSize: 36,
    color: '#5A2D18',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 12,
    fontSize: 16,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  categoryHeading: {
    fontSize: 26,
    color: '#5A2D18',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  categoryCard: {
    backgroundColor: '#FFF8F0',
    width: 170,
    height: 170,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  categoryImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 18,
    color: '#5A2D18',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default HomeScreen;

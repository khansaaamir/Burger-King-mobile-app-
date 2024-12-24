import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, Alert } from 'react-native';
import Header from '@/components/Header';
import { CartContext } from './CartContext';
import {Product,products} from "../../data/categories"


const burgers: Product[] = products.filter((item) => item.categoryId === 1);
console.log(burgers);

const BurgerScreen: React.FC = () => {
  
  const { addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  
    const handleAddToCart = (item: any) => {
      addToCart(item);
      Alert.alert('Success', `${item.name} added to the cart successfully!`);
    };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Image source={(item.image)} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Button 
        title="Add to Cart" 
        color="#6C352A"  // Set the button color to match the theme
        onPress={() => handleAddToCart(item)} 
      />

    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Burgers" showBackButton />
      <FlatList
        data={burgers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDF3E5', paddingTop: 0 },
  listContent: { paddingBottom: 20 },
  item: {
    padding: 15,
    backgroundColor: '#FDF3E5',
    borderRadius: 10,
    marginBottom: 10,
  },
  image: { width: '100%', height: 150, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#6c352a' },
  description: { color: '#6c352a', marginVertical: 5 },
  price: { fontSize: 18, color: '#FF4500' }
});

export default BurgerScreen;

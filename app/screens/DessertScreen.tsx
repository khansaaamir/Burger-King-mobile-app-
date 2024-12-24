import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, Alert } from 'react-native';
import { useCart } from './CartContext';
import Header from '@/components/Header';
import { Product, products } from "../../data/categories";

const desserts: Product[] = products.filter((item) => item.categoryId === 3);

const DessertScreen: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    Alert.alert('Success', `${item.name} added to the cart successfully!`);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Button 
        title="Add to Cart" 
        color="#6C352A" // Themed button color 
        onPress={() => handleAddToCart(item)} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Desserts" showBackButton />
      <FlatList 
        data={desserts} 
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
    backgroundColor: '#FDF3E5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  image: { width: '100%', height: 150, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#6C352A' },
  price: { fontSize: 18, color: '#FF4500', marginVertical: 5 },
});

export default DessertScreen;

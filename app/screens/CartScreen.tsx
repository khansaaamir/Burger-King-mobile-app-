import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useCart } from './CartContext';
import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';

const CartScreen: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const navigation = useNavigation();

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      Alert.alert(
        'Cart is Empty',
        "Can't place order as your cart is empty. Add items to proceed.",
        [{ text: 'OK', style: 'cancel' }]
      );
    } else {
      navigation.navigate('CheckoutScreen');
    }
  };

  // Render each cart item
  const renderCartItem = ({ item }: any) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {item.quantity} x {item.name}
        </Text>
        <Text style={styles.price}>
          ${(item.quantity * item.price).toFixed(2)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => increaseQuantity(item.id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => decreaseQuantity(item.id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Cart" showBackButton />
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is currently empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCartItem}
          contentContainerStyle={styles.listContent}
        />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.checkoutText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDF3E5' },
  listContent: { paddingBottom: 20 },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFF8E7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  infoContainer: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 18, color: '#6C352A', fontWeight: 'bold' },
  price: { fontSize: 16, color: '#FF4500' },
  buttonContainer: { flexDirection: 'row', alignItems: 'center' },
  button: {
    padding: 10,
    backgroundColor: '#6C352A',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  totalContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#D9C6AB',
    backgroundColor: '#FFF8E7',
  },
  totalText: { fontSize: 20, color: '#6C352A', fontWeight: 'bold' },
  checkoutButton: {
    backgroundColor: '#6C352A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  emptyCartText: {
    color: '#6C352A',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default CartScreen;

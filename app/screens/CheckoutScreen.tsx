import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation();
  const { cart } = useCart();

  const handleCheckout = () => {
    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);
    navigation.navigate('OrderConfirmationScreen', { orderDetails: cart, totalPrice });
  };

  const renderCartItem = ({ item }: any) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>
        Quantity: {item.quantity} | Price: ${item.price.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#FDF3E5" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Place Order</Text>
        <View style={styles.iconContainer}>
          {/* Cart and Login Icons */}
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Ionicons name="cart-outline" size={28} color="#FF7043" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Ionicons name="person-circle-outline" size={28} color="#FF7043" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Review Text */}
      <Text style={styles.reviewText}>Review your order and confirm.</Text>

      {/* Cart Items */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartList}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty!</Text>}
      />

      {/* Checkout Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3E5',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#6C352A',
    borderBottomWidth: 1,
    borderColor: '#6C352A',
  },
  topBarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FDF3E5',
    textAlign: 'center',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  reviewText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4A4A4A',
    textAlign: 'center',
    marginVertical: 20,
  },
  cartList: {
    paddingHorizontal: 20,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  itemName: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  emptyText: {
    fontSize: 18,
    color: '#999999',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  checkoutButton: {
    backgroundColor: '#6C352A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default CheckoutScreen;

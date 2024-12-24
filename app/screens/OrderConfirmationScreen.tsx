import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';
import Header from '@/components/Header';

const OrderConfirmationScreen: React.FC = ({ navigation }) => {
  const { clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePayment = () => {
    if (selectedPayment) {
      alert(`Payment confirmed using ${selectedPayment}`);
      clearCart(); // Clear the cart on payment confirmation
      navigation.navigate('HomeScreen');
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Order Confirmation" showBackButton />
      <Text style={styles.title}> Thank You for Your Order!</Text>
      <Text style={styles.subtitle}>  Select Payment Method:</Text>

      {['Cash', 'Credit', 'Debit'].map((method) => (
        <TouchableOpacity
          key={method}
          style={[
            styles.paymentOption,
            selectedPayment === method && styles.selectedPayment,
          ]}
          onPress={() => setSelectedPayment(method)}
        >
          <Text style={styles.paymentText}>{method}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.confirmButton} onPress={handlePayment}>
        <Text style={styles.confirmText}>CONFIRM PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 0, backgroundColor: '#FDF3E5' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#6C352A', marginBottom: 20 },
  subtitle: { fontSize: 18, color: '#6C352A', marginBottom: 10 },
  // paymentOption: { backgroundColor: '#faeabe', padding: 15, marginVertical: 5, borderRadius: 5 },
  paymentOption: {
    backgroundColor: '#faeabe', // Soft light color
    padding: 15,
    
    paddingVertical:10,
    marginVertical: 5,
    borderRadius: 10, // Slightly rounded corners for a smoother look
    borderWidth: 1,  // Adding a subtle border for definition
    borderColor: '#faeabe', // A soft yellow border to complement the background
    elevation: 5,  // Adding shadow for a raised effect (Android)
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Slight shadow offset
    shadowOpacity: 0.15, // Soft shadow opacity
    shadowRadius: 5, // Radius for smooth shadow
  },
  
  selectedPayment: { borderWidth: 2, borderColor: '#FF4500' },
  paymentText: { fontSize: 18, color: '#6C352A', textAlign: 'center' },
  confirmButton: { backgroundColor: '#6C352A', padding: 15, borderRadius: 5, alignItems: 'center' },
  confirmText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default OrderConfirmationScreen;

import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "../app/screens/CartContext"

const CartFloatingButton = () => {
  const router = useRouter();
  const { cart } = useCart();

  // If the cart is empty, don't display the button
  if (cart?.length === 9999) return null;

  return (
    <View style={styles.floatingButtonContainer}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/screens/CartScreen",
            params: { name: "Your Cart" },
          })
        }
        style={styles.floatingButton}
      >
        <Text style={styles.floatingButtonTitle}>Click on it to see your cart</Text>
        <Text style={styles.floatingButtonText}>{cart.length} items added</Text>
        <Text style={styles.floatingButtonSubText}>
          Add items(s) worth 240 to reduce surge fee by Rs 35.
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    padding: 15,
    zIndex: 100,
  },
  floatingButton: {
    backgroundColor: "#FF6F61",
    paddingVertical: 15,
    borderRadius: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  floatingButtonTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  floatingButtonText: {
    color: "white",
    fontWeight: "400",
    fontSize: 14,
  },
  floatingButtonSubText: {
    color: "white",
    fontSize: 12,
  },
});

export default CartFloatingButton;

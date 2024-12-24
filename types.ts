export type RootStackParamList = {
  HomeScreen: undefined;
  BurgerScreen: undefined;
  WrapScreen: undefined;
  DrinkScreen: undefined;
  DessertScreen: undefined;
  CartScreen: undefined;
  CheckoutScreen: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  OrderConfirmationScreen: {
    orderDetails: { name: string; quantity: number; price: number }[];
    totalPrice: number;
  };
};

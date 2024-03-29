import { Restaurant } from "./my-restaurant";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderSummaryProps = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

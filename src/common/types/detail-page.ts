import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { MenuItem, Restaurant } from "./my-restaurant";

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

export type RestaurantMenuItemProps = {
  menuItem: MenuItem;
  addToCart: () => void;
};

export type CheckoutButtonProps = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};

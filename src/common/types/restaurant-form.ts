import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Restaurant } from "./my-restaurant";

export type ManageRestaurantFormProps = {
  restaurant?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

export type CuisineCheckboxProps = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

export type MenuItemInputProps = {
  index: number;
  removeMenuItem: () => void;
};

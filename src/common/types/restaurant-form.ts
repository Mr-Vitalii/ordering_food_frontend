import { ControllerRenderProps, FieldValues } from "react-hook-form";

export type ManageRestaurantFormProps = {
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

import { SearchForm } from "@/components/SearchBar";
import { Restaurant } from "./my-restaurant";

export type SearchBarProps = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

export type RestaurantSearchResponse = {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

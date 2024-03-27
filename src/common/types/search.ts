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

export type SearchResultInfoProps = {
  total: number;
  city: string;
};

export type SearchResultCardProps = {
  restaurant: Restaurant;
};

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

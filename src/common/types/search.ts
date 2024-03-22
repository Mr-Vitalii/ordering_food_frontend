import { SearchForm } from "@/components/SearchBar";

export type SearchBarProps = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

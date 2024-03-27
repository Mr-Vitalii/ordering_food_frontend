import { SortOptionDropdownProps } from "@/common/types/sort";
import { SORT_OPTIONS } from "@/config/sort_options";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { v4 as uuidv4 } from "uuid";

export const SortOptionDropdown = ({
  onChange,
  sortOption,
}: SortOptionDropdownProps) => {
  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="outline">Sort by: {selectedSortLabel}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul>
          {SORT_OPTIONS.map((option) => (
            <li key={uuidv4()}>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => onChange(option.value)}
              >
                {option.label}
              </DropdownMenuItem>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

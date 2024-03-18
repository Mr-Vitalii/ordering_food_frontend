import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import { CuisineCheckbox } from "./CuisineCheckbox";
import { v4 as uuidv4 } from "uuid";

export const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <ul className="grid md:grid-cols-5 gap-1">
              {cuisineList.map((cuisineItem) => (
                <li key={uuidv4()}>
                  <CuisineCheckbox cuisine={cuisineItem} field={field} />
                </li>
              ))}
            </ul>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

import { RestaurantMenuItemProps } from "@/common/types/detail-page";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const RestaurantMenuItem = ({
  menuItem,
  addToCart,
}: RestaurantMenuItemProps) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

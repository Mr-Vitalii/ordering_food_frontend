import { OrderStatusDetailProps } from "@/common/types/order";
import { Separator } from "./ui/separator";
import { v4 as uuidv4 } from "uuid";

export const OrderStatusDetail = ({ order }: OrderStatusDetailProps) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Your Order</span>
        <ul>
          {order.cartItems.map((item) => (
            <li key={uuidv4()}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>£{(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

import { CartItem } from "../Cart/Cart.types";

export interface Order {
  orderId: string;
  items: Array<CartItem>;
  username: string;
  seller: string;
  date: string;
  productId: string;
  totalPrice: number;
}

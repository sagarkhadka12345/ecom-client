export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  img: string;
  seller: string;
}
export interface Cart {
  username: string;
  items: Array<CartItem>;
  modifiedTime: string;
  totalQty: number;
  totalPrice: number;
}

export interface received {
  0: {
    items: Array<CartItem>;
  };
}

import React from "react";
import { useMutation, useQuery } from "react-query";

import { CartItem } from "./Cart.types";
import { CartController } from "./Cart.controller";

const CartComponent: React.FC = (): JSX.Element => {
  const { isLoading, data, isError, refetch } = useQuery(
    "Cart",
    CartController.fetchCart,
    {
      enabled: true,
      staleTime: 1000 * 60 * 5,
    }
  );
  const { mutate } = useMutation({
    mutationKey: "CartMutation",
    mutationFn: CartController.removeCartItems,
    onSuccess: () => {
      refetch();
    },
  });
  console.log(data);

  const cart = data && data.data[0].items;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Please Login or Register...</div>;
  if (!cart) return <div>Error...</div>;

  return cart.length > 0 ? (
    <div className="border p-2 bg-gray-100 sm:h-[100vh] sm:pb-12 ">
      Cart:
      <div className="pb-16 mb-12 ">
        <div className="item my-2 py-2 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-2 shadow-sm">
          {cart.map((data: CartItem, index) => {
            return (
              <div key={index} className="border-2 relative  bg-white m-4 p-4">
                <div className="m-2  flex flex-col">
                  <img
                    className="itemImage my-2"
                    src={`/api/v1/image/item/${data.img}`}
                    alt="image not Found"
                  ></img>
                  <div
                    className="absolute right-2  top-3 hover:cursor-pointer text-2xl"
                    onClick={() => mutate(data.productId)}
                  >
                    X
                  </div>
                </div>
                <div className="flex justify-between mx-2 items-center">
                  <div className="itemName my-2 ">{data.name}</div>
                  <div className="itemPrice my-2">${data.price}</div>
                </div>

                <div className="itemQty my-2 mb-4  mx-2">
                  Quantity: {data.quantity}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="totalQty py-2">
            TotalQuantity:
            {cart.reduce((currentSum, value) => {
              return (currentSum += value.quantity);
            }, 0)}
          </div>
          <div className="totalPrice py-2">
            TotalPrice:
            {cart.reduce((currentPrice, value) => {
              return (currentPrice += value.price * value.quantity);
            }, 0)}
          </div>

          <button
            onClick={() => {
              CartController.checkOutHandler();
            }}
            className="border-2  p-4 border-indigo-600 bg-indigo-500"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>No product</div>
  );
};
export default CartComponent;

import React from "react";

import { Order as TOrder } from "./Order.types";

import moment from "moment";
import { useQuery } from "react-query";

import { fetchUser } from "../NavBar/NavBarControllers";
import OrderController from "./OrderController";
const Order = () => {
  const { isLoading, data, isError } = useQuery(
    "Order",
    OrderController().fetchOrder,
    {
      enabled: true,
      staleTime: 5 * 60 * 10000,
    }
  );
  const UserResponse = useQuery("Order", fetchUser, {
    enabled: true,
    staleTime: 5 * 60 * 10000,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="w-full h-max p-8">
      <table className="text-xs w-full md:text-base">
        <thead>
          <tr>
            <td className="px-1 md:px-4 py-2 bg-gray-400"> Order ID</td>
            <td className="px-1 md:px-4 py-2 bg-gray-400">Order date</td>
            <td className="px-1 md:px-4 py-2 bg-gray-400">User</td>
            <td className="px-1 md:px-4 py-2 bg-gray-400">Total Price</td>
            <td className="px-1 md:px-4 py-2 bg-gray-400"></td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((item: TOrder, index) => (
              <tr key={index}>
                <td
                  title={item.orderId}
                  className="cursor-pointer px-1 md:px-4 py-2 border-b-2 border-gray-400"
                >
                  {item.orderId.slice(0, 10) + `...`}
                </td>
                <td className="px-1 md:px-4 py-2 border-b-2 border-gray-400">
                  {moment(+item.date).format("YYYY-MM-DD")}
                </td>

                <td className="px-1 md:px-4 py-2 border-b-2 border-gray-400">
                  {item.username}
                </td>
                <td className="px-1 md:px-4 py-2 border-b-2 border-gray-400">
                  {item.totalPrice}
                </td>
                {UserResponse.data?.data?.username === "sagarkhadkammm" && (
                  <td className="px-1 md:px-4 py-2 border-b-2 border-gray-400">
                    <div
                      onClick={() =>
                        OrderController(item.orderId).handleOrderDelete()
                      }
                      className="cursor-pointer"
                    >
                      X
                    </div>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

import React, { useState, useEffect } from "react";
import { Item } from "../../types/types";
import { cartEndPoint, itemEndPoint } from "../../Apis";
import { ProductDefault } from "../../images";

import swal from "sweetalert2";
import { userEndPoint } from "../../Apis";
import axios from "axios";
import { User } from "../NavBar/NavBar.types";
import ProductCardController from "./ProductCard.controller";
import { useMutation, useQueryClient } from "react-query";
import { CartController } from "../Cart/Cart.controller";

const ProductCard = ({
  img,
  name,
  productId,
  seller,
  sellerId,
  price,
  type,
}: Item) => {
  const [quantity, setQuantity] = useState<number>(1);
  const updateCartEndPoint = `${cartEndPoint}/update`;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-nocheck
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const ProductCard = new ProductCardController({
    updateCartEndPoint,
    name,
    seller,
    sellerId,
    price,
    type,
    quantity,
    productId,
    img,
  });
  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  const api = `${userEndPoint}/findUser`;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios
      .get(`${api}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => console.log("Please login or create User"));
  }, [api]);

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`${itemEndPoint}/delete/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      swal
        .fire({
          icon: "success",
          html: "The item has been Deleted",
          showCloseButton: true,
        })
        .then(() => window.location.reload());
    } catch (error) {
      swal.fire({
        icon: "error",
        html: "Deletion error",
        showCloseButton: true,
      });
    }
  };
  const useQuery = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: "Cart",
    mutationFn: CartController.fetchCart,
    onSuccess: () => {
      useQuery.refetchQueries("Cart");
    },
  });
  const handleAddToCart = async () => {
    await ProductCard.addToCart();
    mutate();
  };

  return (
    <div className="mb-4">
      <div className="cart flex flex-wrap flex-col p-6 sm:p-4 m-2  bg-[#E6E6E6] rounded-md hover:bg-amber-200  shadow-md ">
        <div className="w-auto max-w-72 flex justify-center object-cover ">
          <img
            className="img "
            src={
              img.includes(".") ? `/api/v1/image/item/${img}` : ProductDefault
            }
          ></img>
        </div>
        <div className="flex justify-between px-2 py-1">
          <div className="img-container p-2 my-2">{name}</div>
          <div className="price p-2 my-2 text-amber-600"> ${price}</div>
        </div>
        <div className="seller-container px-4 pb-2 text-indigo-500">
          Seller: &nbsp; {seller}
        </div>
        <div className="flex justify-between p-2 py-4 mb-2 relative">
          <div className="quantity px-2  flex gap-4 items-center ">
            Quantity:
            <div className="flex border-2 border-zinc-900 rounded-md justify-between items-center px-2 py-1">
              <button className="" onClick={handleClick}>
                -
              </button>
              <div className="w-8 flex justify-center items-center">
                {quantity}
              </div>
              <button className="" onClick={handleClick}>
                +
              </button>
            </div>
          </div>
          <div className="type px-2 text-indigo-500 ">{type}</div>
        </div>

        {user?.username !== "sagarkhadkammm" ? (
          <button
            className="p-2 w-max border-0 border-b-2 hover:text-black mx-auto "
            onClick={handleAddToCart}
          >
            Set to Cart
          </button>
        ) : (
          <button
            className="p-2 w-max border-0 border-b-2 hover:text-black mx-auto "
            onClick={() => deleteProduct(productId)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

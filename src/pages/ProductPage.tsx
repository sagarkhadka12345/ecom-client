import React, { useState } from "react";
import { Item } from "../types/types";

import ProductCard from "../components/ProductCard/ProductCard";

import { useQuery } from "react-query";
import { fetchProducts, KEYWORDS } from "./ProductContollers";

const ProductPage: React.FC = (): JSX.Element => {
  const [categories, setCategories] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCategories((event.target as HTMLDivElement).innerText);
  };

  const { isLoading, data, error } = useQuery("Products", fetchProducts, {
    enabled: true,
    staleTime: Infinity,
  });
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  if (error) return <>Error...</>;

  return (
    <div className="relative bg-gray-100 pb-12 ">
      <div className="w-max m-auto py-4 shodow-md">
        <div className="rounded-md border-2">
          <input
            className="py-2 border bg-white px-0"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <button className="p-2 m-0">Search</button>
        </div>
      </div>

      <ul className="flex justify-between w-full px-4  border-y-2 overflow-x-scroll">
        {KEYWORDS.map((val, i) => (
          <div
            key={i}
            onClick={handleClick}
            className={
              categories === val
                ? "cursor-pointer p-2 m-1 mb-4 px-4 rounded-md bg-indigo-400 shadow-md "
                : "cursor-pointer p-2 m-1 mb-4 px-4 rounded-md bg-gray-200"
            }
          >
            {val}
          </div>
        ))}
      </ul>

      {isLoading ? (
        "loading..."
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 px-4  ">
            {data &&
              data.data.map((data: Item, index) =>
                categories === "All" && search === "" ? (
                  <ProductCard
                    key={index}
                    img={data.img}
                    name={data.name}
                    price={data.price}
                    type={data.type}
                    seller={data.seller}
                    productId={data.productId}
                    quantity={1}
                    _id={""}
                    _v={0}
                    sellerId={data.sellerId}
                  />
                ) : data.type === categories &&
                  data.name.toUpperCase().indexOf(search.toUpperCase()) > -1 ? (
                  <ProductCard
                    key={index}
                    img={data.img}
                    name={data.name}
                    price={data.price}
                    type={data.type}
                    seller={data.seller}
                    productId={data.productId}
                    quantity={1}
                    _id={""}
                    _v={0}
                    sellerId={data.sellerId}
                  />
                ) : categories === "All" &&
                  data.name.toUpperCase().includes(search.toUpperCase()) ? (
                  <ProductCard
                    key={index}
                    img={data.img}
                    name={data.name}
                    price={data.price}
                    type={data.type}
                    seller={data.seller}
                    productId={data.productId}
                    quantity={1}
                    _id={""}
                    _v={0}
                    sellerId={data.sellerId}
                  />
                ) : (
                  ""
                )
              )}
          </div>
        </>
      )}
      <div className="absolute hidden">
        The item has been added to cart succesfully!!!
      </div>
    </div>
  );
};

export default ProductPage;

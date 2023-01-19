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

  if (error) return <>Error...</>;

  return (
    <div className="relative  pb-12 ">
      <div className=" m-auto py-4 shodow-md flex justify-between border-y-2 px-12">
        <div className="flex-[0.85] h-max  border-b-2 flex justify-between">
          <input
            className="py-2  appearance-none outline-none border-0 border-b-[1px] border-b-yellow-800 bg-white px-0 flex-auto"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="m-0 w-16 border-b-[1px] ">Search</button>
        </div>

        <ul className="flex flex-[1.5] justify-between w-full px-4   overflow-x-scroll">
          {KEYWORDS.map((val, i) => (
            <div
              key={i}
              onClick={handleClick}
              className={
                categories === val
                  ? "cursor-pointer p-2 m-1 mb-4 px-8 text-yellow-600 border-b-2 border-b-yellow-700"
                  : "cursor-pointer p-2 m-1 mb-4 px-8 text-slate-800"
              }
            >
              {val}
            </div>
          ))}
        </ul>
      </div>

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

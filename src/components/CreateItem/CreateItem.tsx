import React, { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "react-query";

import { fetchUser } from "../NavBar/NavBarControllers";
import CreateItemController from "./CreateItem.controller";

const CreateItem = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [type, setType] = useState<string>("");

  const [image, setImg] = useState<File | null>(null);

  const queryClient = useQueryClient();
  useQuery("User", fetchUser, {
    enabled: true,
    staleTime: 10000 * 60 * 50,
  });

  const { mutate } = useMutation({
    mutationKey: "Product",
    mutationFn: CreateItemController.createItem,
    onSuccess: () => {
      queryClient.refetchQueries("Products");
    },
  });
  return (
    <div className="flex  h-[80.5vh] justify-center items-center mx-8 ">
      <form
        onSubmit={(e) => mutate({ e, name, price, type, image })}
        method="POST"
        className="border flex flex-col text-indigo-400 p-4 sm:w-[40vw] md:w-[30vw] w-full bg-gray-100 shadow-md "
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border  py-1 text-indigo-400 my-1"
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="border  py-1 text-indigo-400 my-1"
        />
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="border  py-1 text-indigo-400 my-1"
        />
        <label htmlFor="itemImage">Image:</label>
        <input
          type="file"
          name="itemImage"
          className="border  py-1 text-indigo-400 "
          onChange={(e) => {
            setImg(e.target.files && e.target.files[0]);
          }}
        />
        <div className="flex justify-center">
          {" "}
          <input
            type="submit"
            value="Create Item"
            className=" hover:cursor-pointer mt-4 border-2 bg-white shadow-sm p-2 flex justify-center"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateItem;

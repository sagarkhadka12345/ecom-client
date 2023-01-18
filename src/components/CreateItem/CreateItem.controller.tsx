import swal from "sweetalert2";
import { ZodError } from "zod";
import { doPost } from "../../Services/Axios";
import { isAxiosError } from "../../Services/Helpers";

class CreateItemController {
  static createItem = async ({
    e,
    name,
    price,
    type,
    image,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    name: string;
    price: string;
    type: string;
    image: File | null;
  }) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name as string);
      formData.append("price", price as string);
      formData.append("type", type as string);
      formData.append("itemImage", image as File);

      await doPost("item/createItem", formData);

      swal.fire({
        html: "Item Posted Successfully",
        showCloseButton: true,
        showConfirmButton: true,
      });
    } catch (err) {
      if (isAxiosError<ZodError>(err)) {
        if (err.status === "406") {
          swal.fire({
            html: err.response?.data,
            showCloseButton: true,
            showConfirmButton: true,
          });
        } else {
          return swal.fire({
            html: err.response?.data.issues[0].message,
            showCloseButton: true,
            showConfirmButton: true,
          });
        }
      }
    }
  };
}

export default CreateItemController;

import swal from "sweetalert2";
import { ZodError } from "zod";
import { doPost } from "../../Services/Axios";
import { isAxiosError } from "../../Services/Helpers";

const handleRegister = async (
  e: React.FormEvent<HTMLFormElement>,
  firstname: string,
  username: string,
  lastname: string,
  email: string,
  password: string,
  address: string,
  confirmPassword: string
) => {
  e.preventDefault();
  try {
    await doPost("api/user/createUser", {
      firstname,
      username,
      lastname,
      email,
      password,
      address,
      confirmPassword,
    });
  } catch (err) {
    if (isAxiosError<ZodError>(err)) {
      swal.fire({
        html: err.response?.data.issues[0].message,
        showCloseButton: true,
        showConfirmButton: true,
      });
    }
  }

  await doPost("/cart/createCart", {
    username,
  });
};

export default { handleRegister };

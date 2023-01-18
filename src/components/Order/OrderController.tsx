import axios, { AxiosResponse } from "axios";
import swal from "sweetalert2";
import { doGet } from "../../Services/Axios";
import { Order as TOrder } from "./Order.types";

function OrderController(id?: string) {
  const fetchOrder = async (): Promise<AxiosResponse<TOrder[]>> => {
    return doGet(`order/getAllOrders`);
  };

  const handleOrderDelete = async () => {
    try {
      await axios.delete(`order/deleteOrder/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      swal
        .fire({
          icon: "success",
          title: "Success",
          text: "Order delete success",
        })
        .then(() => window.location.reload());
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "Error",
        text: "Order delete error",
      });
    }
  };
  return {
    fetchOrder,
    handleOrderDelete,
  };
}

export default OrderController;

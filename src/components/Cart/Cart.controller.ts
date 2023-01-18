import { AxiosResponse } from "axios";
import { cartEndPoint } from "../../Apis";
import swal from "sweetalert2";
import getStripe from "../../getStripe";
import { received } from "./Cart.types";

import { doGet, doPost } from "../../Services/Axios";

const findCartEndPoint = `${cartEndPoint}/findCart` as const;
const removeItemEndPoint = `${cartEndPoint}/remove` as const;

export class CartController {
  static fetchCart = async (): Promise<AxiosResponse<received, unknown>> => {
    return doGet(findCartEndPoint);
  };
  static removeCartItems = async (productId: string) => {
    return doPost(removeItemEndPoint, {
      productId: productId,
    });
  };

  static async handleStripe() {
    const stripe = await getStripe();
    await stripe.redirectToCheckout({
      lineItems: [
        {
          quantity: 1,
          price: "price_1MKkzrG9ZwN3X5brnJgJgwgT",
        },
      ],
      mode: "subscription",
      successUrl: `http://localhost:3002/success`,
      cancelUrl: `http://localhost:3002/cancel`,
      customerEmail: "customer@email.com",
    });
  }
  static checkOutHandler = async () => {
    swal
      .fire({
        html: "<p>Do you really want to check out</p>",
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          CartController.handleStripe();
        } else if (result.isDenied) {
          return window.location.reload();
        }
      });
  };
}

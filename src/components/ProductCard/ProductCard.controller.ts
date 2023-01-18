import { doPost } from "../../Services/Axios";
import swal from "sweetalert2";
function ProductCardController(
  this: {
    updateCartEndPoint: string;
    name: string;
    seller: string;
    sellerId: string;
    price: number;
    type: string;
    quantity: number;
    productId: string;
    img: string;
  },
  {
    updateCartEndPoint,
    name,
    seller,
    sellerId,
    price,
    type,
    quantity,
    productId,
    img,
  }: {
    updateCartEndPoint: string;
    name: string;
    seller: string;
    sellerId: string;
    price: number;
    type: string;
    quantity: number;
    productId: string;
    img: string;
  }
) {
  this.updateCartEndPoint = updateCartEndPoint;
  this.name = name;
  this.seller = seller;
  this.sellerId = sellerId;
  this.price = price;
  this.type = type;
  this.quantity = quantity;
  this.productId = productId;
  this.img = img;
}

ProductCardController.prototype.addToCart = async function () {
  try {
    await doPost(this.updateCartEndpoint, {
      item: {
        name: this.name,
        seller: this.seller,
        sellerId: this.sellerId,
        price: this.price,
        type: this.type,
        quantity: this.quantity,
        productId: this.productId,
        img: this.img,
      },
    });
    swal.fire({
      icon: "success",
      html: "The item has been added to the cart successfully ",
      showCloseButton: true,
    });
  } catch (error) {
    swal.fire({
      icon: "error",
      html: "Please login before adding to the cart",
      showCloseButton: true,
    });
  }
};

export default ProductCardController;

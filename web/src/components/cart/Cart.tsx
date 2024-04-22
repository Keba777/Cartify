"use client";

import { useGetCartsByUserIDQuery } from "@/store/features/cart";
import { useCookies } from "react-cookie";
import CartProduct from "./CartProduct";

const Cart = () => {
  const [cookies] = useCookies(["user"]);
  const userID = cookies?.user?.id;

  const { data: carts, error, isLoading } = useGetCartsByUserIDQuery(userID);
  return (
    <div>
      {carts?.map((cart) => (
        <div key={cart.id}>
          <CartProduct productID={cart.productID} />
        </div>
      ))}
    </div>
  );
};

export default Cart;

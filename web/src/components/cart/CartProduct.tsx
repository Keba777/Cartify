import { useGetProductByIDQuery } from "@/store/features/product";
import Image from "next/image";
import React from "react";

interface Props {
  productID: string;
}

const CartProduct = ({ productID }: Props) => {
  const { data: product, error, isLoading } = useGetProductByIDQuery(productID);
  return (
    <div>
      {product && (
        <div>
          <h1>{product?.name}</h1>
          <Image
            src={product?.image}
            alt={product?.name}
            width={200}
            height={200}
            className="w-8 h-8"
          />
        </div>
      )}
    </div>
  );
};

export default CartProduct;

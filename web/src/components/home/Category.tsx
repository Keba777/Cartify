import React from "react";
import { useGetAllProductsQuery } from "@/store/features/product";
import Image from "next/image";

const Category = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred while fetching data.</div>;

  return (
    <div>
      <h1>All Products</h1>
      {products?.map((product) => (
        <div key={product.id} className="p-4 border">
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.name}
          />
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
          <p>Price: {product.price}</p>
          <p>{product.target}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;

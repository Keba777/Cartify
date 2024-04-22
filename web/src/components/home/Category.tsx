"use client";

import React, { useState } from "react";
import { useGetAllProductsQuery } from "@/store/features/product";
import Product from "@/types/product";
import CategoryCard from "./CategoryCard";
import FilterButtons from "./FilterButtons";
import { useCreateCartMutation } from "@/store/features/cart";
import { useCookies } from "react-cookie";

const Category = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [createCart] = useCreateCartMutation();
  const [selectedTarget, setSelectedTarget] = useState<string>("women");
  const [selectedCategory, setSelectedCategory] = useState<string>("clothing");

  const filteredProducts = products?.filter((product: Product) => {
    return (
      product.target === selectedTarget && product.category === selectedCategory
    );
  });

  const [cookies] = useCookies(["user"]);
  const userID = cookies?.user?.id;

  const handleClick = (productID: string) => {
    const cartData = {
      productID,
      userID,
    };
    createCart(cartData);
  };

  return (
    <section className="flex flex-col container mx-auto py-10">
      <div>
        <h1 className="font-bold text-3xl text-primary flex justify-center mb-6">
          Shop By Category
        </h1>
        <FilterButtons
          selectedTarget={selectedTarget}
          setSelectedTarget={setSelectedTarget}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="grid px-6 sm:px-4 lg:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error occurred while fetching data.</p>
          ) : (
            filteredProducts?.map((product: Product) => (
              <CategoryCard
                key={product.id}
                product={product}
                onClick={() => handleClick(product.id)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;

import Product from "@/types/product";
import Image from "next/image";

interface Props {
  product: Product;
}

const CategoryCard = ({ product }: Props) => {
  return (
    <div className="p-5 rounded-md bg-gray-100 flex flex-col justify-between">
      <div className="mb-4 flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={180}
        />
        <h2 className="text-primary font-semibold text-lg">{product.name}</h2>
        <p className="text-bluegray font-medium ">${product.price}</p>
      </div>

      <button className="bg-accent hover:bg-red-500 text-white py-1 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default CategoryCard;

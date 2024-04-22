import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";
import Category from "@/components/home/Category";
import Cart from "@/components/cart/Cart";

export default function Home() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Cart />
      <Category />
    </div>
  );
}

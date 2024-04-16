"use client";

import { useCookies } from "react-cookie";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";
import Category from "@/components/home/Category";

export default function Home() {
  const [cookies] = useCookies(["user"]);
  console.log(cookies?.user);

  return (
    <div>
      <Hero />
      <Category />
      {/* <p>{cookies?.user?.name}</p> */}
      <FlashSales />
    </div>
  );
}

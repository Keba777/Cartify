"use client";

import { useCookies } from "react-cookie";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";

export default function Home() {
  const [cookies] = useCookies(["user"]); // Use useCookies hook to access cookies

  return (
    <div>
      <Hero />
      <p>{cookies?.user?.name}</p>
      <FlashSales />
    </div>
  );
}

"use client";

import { useCookies } from "react-cookie";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";

export default function Home() {
  const [cookies] = useCookies(["token"]); // Use useCookies hook to access cookies

  console.log(cookies.token); // Access the token from cookies object

  return (
    <div>
      <Hero />
      <p>{cookies?.user.name}</p>
      <FlashSales />
    </div>
  );
}

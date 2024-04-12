import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

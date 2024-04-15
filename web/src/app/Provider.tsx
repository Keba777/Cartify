"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { CookiesProvider } from "react-cookie";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <Provider store={store}>{children}</Provider>;
    </CookiesProvider>
  );
}

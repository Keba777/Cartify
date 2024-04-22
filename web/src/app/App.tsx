"use client"

import { Provider } from "react-redux";
import { store } from "../store";
import { CookiesProvider, useCookies } from "react-cookie"; 
import { useEffect } from "react";
import { setUser } from "../store/slices/authSlice";

export default function App({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookies] = useCookies(["user", "token"]);

  useEffect(() => {
    const user = cookies?.user;
    const token = cookies?.token;
    if (user && token) {

      store.dispatch(setUser({ user: user, token }));
    }
  }, [cookies]); 

  return (
    <Provider store={store}>
      <CookiesProvider>{children}</CookiesProvider>
    </Provider>
  );
}

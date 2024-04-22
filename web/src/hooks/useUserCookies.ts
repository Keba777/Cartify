import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import User from "@/types/user";

interface UserCookies {
  cookies: any;
  user: User | undefined;
  token: string | undefined;
}

const useUserCookies = (): UserCookies => {
  const [cookies] = useCookies(["user", "token"]);
  const [user, setUser] = useState<User | undefined>(cookies.user);
  const [token, setToken] = useState<string | undefined>(cookies.token);

  useEffect(() => {
    setUser(cookies.user);
    setToken(cookies.token);
  }, [cookies.user, cookies.token]);

  return { cookies, user, token };
};

export default useUserCookies;

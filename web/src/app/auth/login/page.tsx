"use client";

import logo from "@/../public/logo.svg";
import LoginForm from "@/components/auth/LoginForm";
import ErrorAlert from "@/components/common/ErrorAlert";
import { useLoginUserMutation } from "@/store/features/auth";
import User from "@/types/user";
import { useCookies } from "react-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setError, setUser } from "@/store/slices/authSlice";

const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["user", "token"]);
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch(); 

  const onSubmit = async (data: User) => {
    let res = await loginUser(data);
    if ("error" in res) {
      if ("status" in res.error) {
        let errorData = res.error.data as { message: string };
        setFormError(errorData.message);
        dispatch(setError(errorData.message)); 
      } else {
        setFormError(res.error.message!);
        dispatch(setError(res.error.message!)); 
      }
    } else {
      dispatch(setUser({ user: res.data.user, token: res.data.token })); 
      setCookie("user", JSON.stringify(res.data.user), { secure: true });
      setCookie("token", res.data.token, { secure: true });
      router.push("/");
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-md">
        <span className="flex justify-center">
          <Image src={logo} alt="logo" className="w-40 sm:w-48 mb-6" />
        </span>

        <h2 className="flex justify-center font-bold text-2xl text-bluegray mb-4">
          Login
        </h2>
        <LoginForm onSubmit={onSubmit} />
        <p className="text-secondary flex justify-center mt-4">
          Don&apos;t have an account!{" "}
          <Link href="/auth/signup" className="font-bold pl-3">
            Signup
          </Link>
        </p>
        {formError && (
          <ErrorAlert error={formError} onClick={() => setFormError("")} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;

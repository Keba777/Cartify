"use client";

import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import Link from "next/link";
import User from "@/types/user";
import { useRegisterUserMutation } from "@/store/features/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ErrorAlert from "@/components/common/ErrorAlert";

const SignupPage = () => {
  const [registerUser] = useRegisterUserMutation();
  const router = useRouter();
  const { reset } = useForm<User>();
  const [formError, setFormError] = useState("");

  const onSubmit = async (data: User) => {
    let res = await registerUser(data);
    if ("error" in res) {
      if ("status" in res.error) {
        let errorData = res.error.data as { message: string };
        setFormError(errorData.message);
      } else {
        setFormError(res.error.message!);
      }
    } else {
      console.log("Registration successful.", res.data);
      reset();
      router.push("/login");
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-md">
        <span className="flex justify-center">
          <Image src={logo} alt="logo" className="w-40 sm:w-48 mb-6" />
        </span>

        <h2 className="flex justify-center font-bold text-2xl text-bluegray mb-4">
          Register
        </h2>
        <SignupForm onSubmit={onSubmit} />
        <p className="text-secondary flex justify-center mt-4">
          Already have an account!{" "}
          <Link href="/auth/login" className="font-bold pl-3">
            Login
          </Link>
        </p>
        {formError && (
          <ErrorAlert error={formError} onClick={() => setFormError("")} />
        )}
      </div>
    </div>
  );
};

export default SignupPage;

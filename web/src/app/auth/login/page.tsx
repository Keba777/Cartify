import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-md">
        <span className="flex justify-center">
          <Image src={logo} alt="logo" className="w-40 sm:w-48 mb-6" />
        </span>

        <h2 className="flex justify-center font-bold text-2xl text-bluegray mb-4">
          Login
        </h2>
        <LoginForm />
        <p className="text-secondary flex justify-center mt-4">
          Don&apos;t have an account!{" "}
          <Link href="/auth/signup" className="font-bold pl-3">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

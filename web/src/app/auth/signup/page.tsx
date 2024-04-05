import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 bg-white px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-md">
        <span className="flex justify-center">
          <Image src={logo} alt="logo" className="w-40 sm:w-48 mb-6" />
        </span>

        <h2 className="flex justify-center font-bold text-2xl text-bluegray mb-4">
          Signup
        </h2>
        <SignupForm />
        <p className="text-secondary flex justify-center mt-4">
          Already have an account!{" "}
          <Link href="/auth/login" className="font-bold pl-3">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

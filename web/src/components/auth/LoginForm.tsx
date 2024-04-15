import User from "@/types/user";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: User) => Promise<void>;
}

const LoginForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-bluegray">
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: "Email is required" })}
        className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mt-4"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <input
        type="password"
        placeholder="password"
        {...register("password", { required: "Password is required" })}
        className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mt-4"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <div className="mt-6">
        <button
          disabled={isSubmitting}
          className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

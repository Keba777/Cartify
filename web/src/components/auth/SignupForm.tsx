import User from "@/types/user";
import { useForm } from "react-hook-form";
import { setUser, setLoading, setError } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";

interface Props {
  onSubmit: (data: User) => Promise<void>;
}

const SignupForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>();
  const dispatch = useDispatch();

  const onSubmitHandler = async (data: User) => {
    try {
      dispatch(setLoading(true));
      await onSubmit(data);
      dispatch(setUser(data));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="text-bluegray">
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: "Name is required" })}
        className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm"
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}

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
          Register
        </button>
      </div>
    </form>
  );
};

export default SignupForm;

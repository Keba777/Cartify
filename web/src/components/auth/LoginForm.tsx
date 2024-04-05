import React from "react";

const LoginForm = () => {
  return (
    <form className="text-bluegray">
      <input
        type="email"
        placeholder="email"
        className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-4"
      />
      <input
        type="password"
        placeholder="password"
        className="focus:outline-none w-full bg-background px-5 py-2 rounded-sm mb-6"
      />
      <div>
        <button className="px-5 py-2 rounded-md bg-bluegray hover:bg-lightbluegray text-white w-full">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

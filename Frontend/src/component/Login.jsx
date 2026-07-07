import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <dialog id="login_modal" className="modal">
      <div className="modal-box w-[400px]">

        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("login_modal").close()}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-5">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full mt-2"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}

          <label className="mt-4 block">Password</label>

          <input
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full mt-2"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
          )}

          <div className="flex justify-between items-center mt-6">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>

            <p>
              Not Registered?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => {
                  document.getElementById("login_modal").close();
                  document.getElementById("signup_modal").showModal();
                }}
              >
                Signup
              </button>
            </p>
          </div>

        </form>
      </div>
    </dialog>
  );
};

export default Login;
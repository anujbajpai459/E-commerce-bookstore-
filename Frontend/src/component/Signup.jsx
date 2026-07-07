import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <dialog id="signup_modal" className="modal">
      <div className="modal-box w-[400px]">

        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("signup_modal").close()}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-5">Signup</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <label>Name</label>

          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full mt-2"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}

          {/* Email */}
          <label className="mt-4 block">Email</label>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full mt-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <label className="mt-4 block">Password</label>

          <input
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full mt-2"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          <div className="flex justify-between items-center mt-6">
            <button type="submit" className="btn btn-secondary">
              Signup
            </button>

            <p>
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => {
                  document.getElementById("signup_modal").close();
                  document.getElementById("login_modal").showModal();
                }}
              >
                Login
              </button>
            </p>
          </div>

        </form>
      </div>
    </dialog>
  );
};

export default Signup;
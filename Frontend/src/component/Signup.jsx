import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        userInfo
      );

      if (res.data) {
        toast.success("Signup Successfully!");

        localStorage.setItem(
          "Users",
          JSON.stringify(res.data.user)
        );

        reset();

        document.getElementById("signup_modal").close();
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <dialog id="signup_modal" className="modal">
      <div className="modal-box w-[400px]">
        {/* Close Button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() =>
            document.getElementById("signup_modal").close()
          }
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-5 text-center">
          Signup
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <label className="font-medium">Full Name</label>

          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full mt-2"
            {...register("fullname", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />

          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullname.message}
            </p>
          )}

          {/* Email */}
          <label className="font-medium block mt-4">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full mt-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
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
          <label className="font-medium block mt-4">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full mt-2"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message:
                  "Password must be at least 6 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="btn btn-secondary"
            >
              Signup
            </button>

            <p className="text-sm">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => {
                  document
                    .getElementById("signup_modal")
                    .close();
                  document
                    .getElementById("login_modal")
                    .showModal();
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
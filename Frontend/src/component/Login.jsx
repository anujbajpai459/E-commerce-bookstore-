import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AutheProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/user/login",
        userInfo
      );

      if (res.data) {
        // Save user in localStorage
        localStorage.setItem(
          "Users",
          JSON.stringify(res.data.user)
        );

        // Update Auth Context
        setAuthUser(res.data.user);

        toast.success("Login Successfully!");

        reset();
        document.getElementById("login_modal").close();

        navigate("/");
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <dialog id="login_modal" className="modal">
      <div className="modal-box w-[400px]">
        {/* Close Button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() =>
            document.getElementById("login_modal").close()
          }
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-5 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="font-medium">Email</label>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full mt-2"
            {...register("email", {
              required: "Email is required",
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
              Login
            </button>

            <p className="text-sm">
              Not Registered?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => {
                  document
                    .getElementById("login_modal")
                    .close();

                  document
                    .getElementById("signup_modal")
                    .showModal();
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
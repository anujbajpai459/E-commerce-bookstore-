import React from "react";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name */}
        <label className="font-medium">Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full mt-2"
          {...register("name", {
            required: "Name is required",
          })}
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}

        {/* Email */}
        <label className="font-medium block mt-5">
          Email
        </label>

        <input
          type="email"
          placeholder="Email address"
          className="input input-bordered w-full mt-2"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter valid email",
            },
          })}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}

        {/* Message */}
        <label className="font-medium block mt-5">
          Message
        </label>

        <textarea
          rows={6}
          placeholder="Type your message"
          className="textarea textarea-bordered w-full mt-2"
          {...register("message", {
            required: "Message is required",
          })}
        />

        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
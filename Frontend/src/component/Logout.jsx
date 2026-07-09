import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AutheProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem("Users");

    // Update auth state
    setAuthUser(undefined);

    // Success message
    toast.success("Logout Successfully!");

    // Redirect to Home page
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
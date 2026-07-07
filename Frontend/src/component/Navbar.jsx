import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Moon, Sun } from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      element.setAttribute("data-theme", "dark");
    } else {
      element.classList.remove("dark");
      element.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:bg-slate-900/70 dark:text-white"
            : "bg-white dark:bg-slate-900 dark:text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Book <span className="text-pink-500">Store</span>
          </h1>

          <ul className="hidden md:flex gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            
  <li>
    <Link to="/contact">Contact</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="w-56 border rounded-lg py-2 pl-4 pr-10"
              />

              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>

            <button
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            <button
              className="bg-pink-500 text-white px-5 py-2 rounded-lg"
              onClick={() =>
                document.getElementById("login_modal").showModal()
              }
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <Login />
      <Signup />
    </>
  );
};

export default Navbar;
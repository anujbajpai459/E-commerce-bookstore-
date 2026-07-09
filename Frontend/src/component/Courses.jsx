import React from "react";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Courses = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
         try{
      const res=await axios.get("http://localhost:3000/book");
      console.log(res.data);
      setBook(res.data)
   }catch(error){
     console.log(error);
   }
      }
    getBook();
  },[]);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
          We're delighted to have you{" "}
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-12 text-gray-600 dark:text-slate-300">
          Explore our complete collection of textbooks, fiction, and programming resources.
          Whether you want to learn new coding paradigms or seek general knowledge, we've got you covered.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;


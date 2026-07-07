import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card bg-base-100 dark:bg-slate-800 dark:text-white dark:border dark:border-slate-700/50 shadow-xl rounded-xl h-[500px] flex flex-col transition duration-300 hover:scale-105">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="h-60 w-full object-cover"
        />
      </figure>

      <div className="card-body flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{item.name}</h2>

          <div className="badge badge-secondary">
            {item.category}
          </div>
        </div>

        <p className="flex-grow line-clamp-3 text-gray-600 dark:text-slate-300">
          {item.title}
        </p>

        <div className="card-actions justify-between items-center mt-auto">
          <span className="px-3 py-1 border border-gray-300 dark:border-slate-600 rounded-full text-gray-600 dark:text-slate-300 text-sm font-semibold">
            ${item.price}
          </span>

          <button className="btn btn-outline btn-primary dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-500 dark:hover:text-white transition duration-300 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
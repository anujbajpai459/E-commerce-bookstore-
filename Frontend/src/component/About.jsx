import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          About <span className="text-pink-500">Book Store</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Welcome to Book Store! We are passionate about making quality books
          accessible to everyone. Whether you're a student, professional, or an
          avid reader, we have something for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-base-100 shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-pink-500">
            📚 Our Mission
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Our mission is to inspire learning by providing a wide collection of
            educational, technical, and story books at affordable prices.
          </p>
        </div>

        <div className="bg-base-100 shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-pink-500">
            🌍 Our Vision
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We aim to become a trusted online platform where readers can easily
            discover, explore, and purchase books from different categories.
          </p>
        </div>

        <div className="bg-base-100 shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-pink-500">
            ⭐ Why Choose Us?
          </h2>
          <ul className="mt-4 text-gray-600 dark:text-gray-300 space-y-2 list-disc ml-5">
            <li>Wide collection of books</li>
            <li>Affordable prices</li>
            <li>Fast and secure service</li>
            <li>User-friendly interface</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-pink-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold">
          Read More, Learn More, Grow More!
        </h2>
        <p className="mt-4 text-lg">
          Thank you for choosing Book Store. We believe every book opens a new
          world of knowledge and imagination.
        </p>
      </div>
    </div>
  );
};

export default About;
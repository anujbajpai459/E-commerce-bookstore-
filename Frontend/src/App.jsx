import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./component/home/Home";
import Course from "./component/courses/Course";
import About from "./component/About";
import Contacts from "./component/contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Toaster position="top-center" />
    </>
  );
};

export default App;
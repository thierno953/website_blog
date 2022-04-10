import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./comppnents/pageContent/HomePages";
import Header from "./comppnents/home/header/Header";
import Footer from "./comppnents/home/Footer";
import Blog from "./comppnents/blog/Blog";
import BlogSingle from "./comppnents/blog/BlogSingle";
import AboutInfo from "./comppnents/about/AboutInfo";
import Contact from "./comppnents/contact/Contact";
import Services from "./comppnents/home/services/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutInfo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

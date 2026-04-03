import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <HeroBanner />
      <ProductSection />
      <Footer />
    </div>
  );
}
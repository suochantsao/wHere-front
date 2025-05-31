"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-[0] left-[0] w-[100vw] duration-400 ease-[cubic-bezier(0.43,0.05,0.17,1)] ${
        isScrolled ? "translate-y-0" : "translate-y-[30px]"
      }`}
    >
      <div
        className={`bg-white flex items-center flex justify-between duration-400 ease-[cubic-bezier(0.43,0.05,0.17,1)] ${
          isScrolled
            ? "c h-[72px] px-[75px] mx-0 rounded-none"
            : "h-[90px] px-[45px] mx-[5vw] rounded-[100px]"
        }`}
      >
        <h1 className="font-bold text-2xl">wHere</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Product Features
          </a>
          <a href="#" className="hover:underline">
            Discussion Forum
          </a>
          <a href="/about" className="hover:underline">
            About Us
          </a>
        </nav>
        <div className="space-x-2">
          <button className="text-sm px-3 py-1 border rounded">
            <a href="/login">Login</a>
          </button>
          <button className="text-sm px-3 py-1 bg-gray-800 text-white rounded">
            <a href="/register">Register</a>
          </button>
        </div>
      </div>
    </header>
  );
}

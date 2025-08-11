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
        <nav className="space-x-4 font-bold space-x-8">
          <a href="#" className="hover:text-[#DAC9A6]">
            產品介紹
          </a>
          <a href="#" className="hover:text-[#DAC9A6]">
            活動資訊
          </a>
          <a href="/about" className="hover:text-[#DAC9A6]">
            關於我們
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="text-sm px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full hover:border-[#DAC9A6] hover:text-[#DAC9A6] transition-all duration-300 font-medium">
            <a href="/login">登入</a>
          </button>
          <button className="text-sm px-6 py-2 bg-[#DAC9A6] text-white rounded-full hover:bg-[#D4C49E] transition-all duration-300 font-medium shadow-sm hover:shadow-md">
            <a href="/register">註冊</a>
          </button>
        </div>
      </div>
    </header>
  );
}
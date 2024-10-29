import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { languages } from "../../Features/Languages/allLanguages";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageMenuOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative bg-bkg gap-y-2 md:gap-y-0 flex-1 py-2 flex flex-col md:flex-row md:items-center justify-between w-[99.7%] px-7 rounded-sm mx-auto">
      {/* Search Bar */}
      <div className="bg-background flex md:w-1/5 flex-row items-center py-1 rounded-md px-2">
        <input
          type="text"
          className="bg-background flex-1 outline-none"
          placeholder={t("search")}
          aria-label="search" // Added aria-label for accessibility
        />
        <button aria-label="search button">
          <CiSearch />
        </button>
      </div>
      
      {/* Icons */}
      <div className="flex flex-row gap-x-2">
        <button
          onClick={toggleTheme}
          aria-label="toggle theme" // Added aria-label
          className="py-2 px-2 rounded-md text-sm text-accent bg-background hover:bg-neutral-400 transition duration-500 ease-in-out"
        >
          <IoMoonOutline />
        </button>
        <button
          aria-label="notifications" // Added aria-label
          className="py-2 px-2 rounded-md text-sm text-accent bg-background hover:bg-neutral-400 transition duration-500 ease-in-out"
        >
          <VscBellDot />
        </button>
        <button
          onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
          aria-label="language" // Added aria-label for language button
          className="py-2 px-2 rounded-md text-sm text-accent bg-background hover:bg-neutral-400 transition duration-500 ease-in-out"
        >
          <MdLanguage />
        </button>
      </div>

      {/* Language Selection Dropdown */}
      {languageMenuOpen && (
        <div className="flex flex-col absolute right-0 top-10 shadow-sm shadow-black divide-y divide-slate-300 bg-bkg rounded-md px-2 py-2 z-50">
          {languages.map((item, index) => (
            <button
              aria-label={`change language to ${item.language}`} // Added aria-label for each language
              className="hover:text-primary text-black"
              key={index}
              onClick={() => changeLanguage(item.key)}
            >
              {item.language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

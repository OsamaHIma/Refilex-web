"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Laptop, MenuIcon, Mail, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LanguageSelector, Translate } from "translate-easy";
// h- stands for header-
const Navbar = () => {
  const { setTheme } = useTheme();
  const [showThemeMenu, setThemeMenu] = useState("-top-[400px]");
  const [showMenu, setMenu] = useState("-right-[400px]");
  const [scrolled, setScrolled] = useState(false);
  // theme Menu toggler button
  const openThemeMenu = () => {
    if (showMenu === "right-0") {
      setMenu("-right-[400px]");
    }

    if (showThemeMenu === "top-[17%]") {
      setThemeMenu("-top-[400px]");
    } else {
      setThemeMenu("top-[17%]");
    }
  };
  // Menu toggler button
  const openMenu = () => {
    if (showThemeMenu === "top-[17%]") {
      setThemeMenu("-top-[400px]");
    }

    if (showMenu === "right-0") {
      setMenu("-right-[400px]");
    } else {
      setMenu("right-0");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 170) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={` ${
        scrolled &&
        " backdrop-blur-md bg-indigo-600/50"
      } h-wrapper fixed top-0 z-20 w-full text-slate-100 transition-all ease-in`}
    >
      <div className="h-container flexCenter paddings innerWidth relative !justify-between border-b-[3px] border-slate-300 !py-2 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>

          <div className="hidden h-20 w-[1px] bg-blue-500 md:block"></div>
          <div className="hidden md:block">
            <p>
              <Translate>Contact US</Translate>
            </p>
            <a href="mailto:" className="ltr:mr-2 rtl:ml-2">
              <Mail className="ext-blue-600 inline ltr:mr-1 rtl:ml-1" />
              info@refilex.com
            </a>
            <a href="tel:+">
              <Phone className="inline ltr:mr-1 rtl:ml-1" />
              +201050533006
            </a>
          </div>
        </div>
        <section className="flexCenter relative">
          {/* Theme menu */}
          <button className="mx-4" onClick={openThemeMenu}>
            <Moon className="hidden rotate-90 transition-all hover:text-slate-900 dark:block dark:rotate-0 dark:text-slate-400 dark:saturate-100 dark:hover:text-slate-100" />
            <Sun className="block rotate-0 transition-all hover:text-slate-900 dark:hidden dark:rotate-90 dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle theme menu</span>
          </button>

          <ul
            dir="ltr"
            className={`${showThemeMenu} menuTransition bg-blue-gradient absolute z-50 m-8 flex w-[9rem] select-none flex-col gap-3 rounded-md shadow-lg ltr:right-[-30%] rtl:right-0 md:ltr:right-[60%]`}
          >
            <li
              className="cursor-pointer rounded-t-md px-8 pb-2 pt-4 text-slate-100 hover:bg-blue-500 hover:text-gray-300 active:!bg-blue-500"
              onClick={() => setTheme("dark")}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </li>
            <li
              className="cursor-pointer py-2 pl-8 text-slate-100 hover:bg-blue-500 hover:text-gray-300 active:!bg-blue-500"
              onClick={() => setTheme("light")}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </li>
            <li
              className="cursor-pointer rounded-b-md pb-4 pl-8 pt-2 text-slate-100 hover:bg-blue-500 hover:text-gray-300 active:!bg-blue-500"
              onClick={() => setTheme("system")}
            >
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </li>
          </ul>

          {/* for large screens */}
          <div className="hidden lg:block">
            <ul className="h-menu flexCenter !gap-8">
              <li>
                <LanguageSelector />
              </li>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`#${link.id}`}>
                    <Translate>{link.name}</Translate>
                  </Link>
                </li>
              ))}
              <button type="button" className="btn bg-blue-gradient">
                <Link href="#contact">
                  <Translate>Request a meeting</Translate>
                </Link>
              </button>
            </ul>
          </div>
          {/* for medium and small screens */}
          <div className="block md:hidden ">
            <LanguageSelector
              dropdownBgColor="!bg-red-600"
              className="!z-50"
              dropdownItemBgColor="!bg-red-600"
              dropDownIconclassName="dark:!text-slate-100"
            />
          </div>
          <button className="mx-4 block lg:hidden" onClick={openMenu}>
            <MenuIcon className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle menu</span>
          </button>
          <ul
            className={`menuTransition flex font-medium !text-white lg:hidden ${showMenu} absolute top-[27%] z-10 m-8 w-[15rem] flex-col rounded-lg bg-black/10 px-11 py-8 shadow-lg backdrop-blur-md dark:bg-white/10`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="my-3">
                <Link href={`#${link.id}`}>{link.name}</Link>
              </li>
            ))}
            <button type="button" className="btn bg-blue-gradient">
              <Link href="#contact">
                <Translate>Request a meeting</Translate>
              </Link>
            </button>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;

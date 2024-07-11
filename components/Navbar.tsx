"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useParams, usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const path = usePathname();

  const logoRef = useRef(null);
  const btnsRef = useRef(null);
  const navbarLinksRef = useRef(null);

  useEffect(() => {
    if (document !== undefined) {
      window.onscroll = (e) => {
        if (window.scrollY) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
    }
  }, []);
  useEffect(() => {
    // text animation
    gsap.to(logoRef.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power1.inOut",
    });

    gsap.to(btnsRef.current, {
      opacity: 1,
      translateX: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });

    gsap.to(navbarLinksRef.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);

  const isActive = (href: string) => path === href;

  return (
    <nav
      className={`${
        scroll ? "bg-slate-800" : "bg-transparent"
      } fixed w-full z-50 top-0 start-0 text-white ${
        path === "/whitepaper" && "hidden"
      }`}
    >
      <div
        className={`container mx-auto flex flex-wrap items-center justify-between transition-all ${
          scroll ? "py-2" : "py-4"
        }`}
      >
        <a
          href="https://svscoin.org/theme-assets/images-3d-graphics/ctcbig.png"
          className="flex items-center space-x-3 rtl:space-x-reverse relative md:w-[90px] md:h-[90px] w-[60px] h-[60px] -translate-x-40 opacity-0 md:ml-0 ml-4"
          ref={logoRef}
          target="_blank"
        >
          <Image
            src="/assets/images/logoo.png"
            // src="https://svscoin.org/theme-assets/images-3d-graphics/ctcbig.png"
            alt=""
            fill
            objectFit="contain"
            ref={logoRef}
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            className="flex md:gap-4 gap-2 translate-x-40 opacity-0"
            ref={btnsRef}
          >
            {/* <button
              type="button"
              className="text-white bg-transparent border border-white font-medium rounded-lg md:text-base text-xs md:px-6 px-4 py-1 md:py-2 text-center"
            >
              Login
            </button>
            <button
              type="button"
              // className="text-gray-800 bg-primary-500 hover:bg-primary-500 focus:text-primary-500 focus:outline-none focus:ring-primary-500 font-medium rounded-lg md:text-base text-xs md:px-6 px-4 py-1 md:py-2 text-center "
              className="text-gray-800 bg-secondary hover:bg-secondary focus:text-secondaryfocus:outline-none focus:ring-secondary font-medium rounded-lg md:text-base text-xs md:px-6 px-4 py-1 md:py-2 text-center "
            >
              Register
            </button> */}
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            navbarOpen ? "bg-slate-800" : "hidden "
          } w-full md:flex md:w-auto md:order-1 `}
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg text-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700 opacity-0 -translate-y-40"
            ref={navbarLinksRef}
          >
            <li>
              <Link
                href="/"
                // className="block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 md:dark:text-primary-500 after:w-full after:h-0.5 after:bg-primary-500 after:absolute after:-bottom-2 after:rounded-full after:left-0 relative"
                className={`${
                  isActive("/")
                    ? "bg-secondary md:after:w-full after:h-0.5 after:bg-secondary after:absolute after:-bottom-2 after:rounded-full after:left-0 md:dark:text-secondary md:text-secondary"
                    : ""
                } block py-2 px-3 text-white  rounded md:bg-transparent md:p-0 z-40 relative`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={`${
                  isActive("/team") || path.includes("/teams")
                    ? "bg-secondary md:after:w-full after:h-0.5 after:bg-secondary after:absolute after:-bottom-2 after:rounded-full after:left-0 md:dark:text-secondary md:text-secondary"
                    : ""
                } block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 z-40  relative`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className={`${
                  isActive("/news")
                    ? "bg-secondary md:after:w-full after:h-0.5 after:bg-secondary after:absolute after:-bottom-2 after:rounded-full after:left-0 md:dark:text-secondary md:text-secondary"
                    : ""
                } block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  z-40 relative`}
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

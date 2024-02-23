import React, { useState } from 'react';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  // change nav color when scroll
  const onChange = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener('scroll', onChange);
  return (
    <div
      className={` ${
        scroll
          ? 'bg-gray-800 fixed top-0 left-0 w-full'
          : 'bg-gray-800 relative transform duration-200'
      }   header  z-[999] flex items-center md:py-2 py-3`}
    >
      <div className=" max-w-[1170px]  w-full flex flex-wrap items-center justify-between mx-auto">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="flex items-center self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <p className="text-4xl h-12 font-bold mr-2 bg-gradient-to-r from-indigo-600  to-pink-200 text-transparent bg-clip-text ps-5 md:ps-0">
              Bayzid
            </p>
          </span>
        </p>
        {/* -------- Menu button ---------- */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center mr-5 md:pr-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/home#about"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
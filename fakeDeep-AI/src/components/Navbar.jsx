import { useState } from "react";
import logo from "../assets/logo_icon.png";
import "../styles/navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu on mobile after clicking
    }
  };

  return (
    <>
      <nav className="fixed top-0 font-roboto text-white w-full z-10 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="nav-logo-container flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Deepfake logo" />
              <span className="ml-2 font-semibold text-xl">
                DEEP{" "}
                <strong className="text-[#4030a7] ml-[-5px]">FAKE AI</strong>{" "}
                <span></span>
              </span>
            </div>
            {/* border-1 border-white */}
            <div className="nav-middle-container hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  How it works
                </a>
                <a
                  href="#tokenomics"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tokenomics
                </a>
                <a
                  href="#roadmap"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Roadmap
                </a>
                <a
                  href="#why-us"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Why Us?
                </a>
                <a
                  href="#chart"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Chart
                </a>
              </div>
            </div>

            <div className="nav-buttons hidden lg:flex items-center space-x-4">
              <button className="btn1   text-white ">Whitepaper</button>
              {/* <button className="btn2  text-white px-3 py-2  text-sm font-medium">
            <strong className='btn001'>Start Bot Now</strong>
  <div className="container-stars">
    <div className="stars"></div>
  </div>


  <div className="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
  </button> */}

              <button className="btn2">
                <strong className="navStrong">Start Bot Now</strong>
                <div className="nav-hoverEffect">
                  <div></div>
                </div>
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} lg:hidden hemBurg-menu`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 innerHemBurg-menu">
            <a
              href="#features"
              onClick={handleNavClick}
              className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={handleNavClick}
              className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              How it works
            </a>
            <a
              href="#tokenomics"
              onClick={handleNavClick}
              className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              onClick={handleNavClick}
              className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Roadmap
            </a>
            <a
              href="#why-us"
              onClick={handleNavClick}
              className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Why Us?
            </a>
            <a
              href="#chart"
              onClick={handleNavClick}
              className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Chart
            </a>
            <div className="nav-buttons">
              <button className="btn1  text-white">Whitepaper</button> <br />
              <button className="newBtn2 ">
                <strong className="navStrong1">Start Bot Now</strong>
                <div className="nav-hoverEffect1">
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

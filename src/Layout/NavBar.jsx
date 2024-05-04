import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import insneddle from "../assets/insneddle.png";

const navItems = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "check your risk",
        route: "/riskCheck",
    },
    {
        title: "About us",
        route: "/about",
    },
    {
      title: "Articles",
      route: "/articles",
  },
];

export const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showX, setShowX] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowX(!showX);
    };

    const closeMenu = () => {
        setShowMenu(false);
        setShowX(false);
    };

    return (
        <>
            {/* Mobile */}
            {showMenu && (
                <div className=" fixed top-0 left-0 flex-col w-full h-full  z-50 text-black  shadow-lg pt-16 flex md:hidden">
                    <div className="flex flex-col gap-4 w-screen justify-center items-center pt-10 ">
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.route}
                                className={(navData) =>
                                    navData.isActive
                                        ? "underline underline-offset-4 decoration-yellow-600"
                                        : ""
                                }
                                onClick={closeMenu}
                            >
                                {item.title}
                            </NavLink>
                        ))}
                        <div className="flex flex-col items-center gap-6 grow-0">
                            <NavLink
                                to="/login"
                                className={(navData) =>
                                    navData.isActive
                                        ? "underline underline-offset-4 decoration-primary"
                                        : ""
                                }
                            >
                                Login
                            </NavLink>
                            <button
                                className="rounded-lg text-white bg-primary px-4 py-1 "
                                onClick={() => {
                                    navigate("/signup");
                                    closeMenu();
                                }}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop */}
            <nav className=" bg-white border border-def-gray wrapper py-3 px-8 flex items-center justify-between  text-black text-xl font-medium gap-16 fixed w-screen z-50">
                {/* Left Section */}
                <div className="flex items-center gap-5 grow-0 text-2xl font-semibold">
                    {/* Logo */}
                    
                    <Link to={"/"} onClick={closeMenu} className="flex flex-row items-center justify-center text-center">
                    <img src={insneddle} alt="logo" className="w-14 h-14" />
                    <p className="text-center justify-center h-full">Dia<span className="text-primary">Detect</span> </p>
                    
                    </Link>
                   
                    
                </div>
                {/* Middle */}
                <div className="items-center gap-10 hidden md:flex grow">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.route}
                            className={(navData) =>
                                navData.isActive
                                    ? " transform hover:scale-105 underline underline-offset-8 decoration-primary"
                                    : "transform hover:scale-105"
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
                {/* Right Side */}
                <div className="hidden md:flex items-center gap-6 grow-0 transform hover:scale-105">
                    
                    <button
                        href=""
                        className="rounded-lg text-white bg-primary px-4 py-1 transform hover:scale-105 border hover:bg-white hover:text-primary hover:border-primary "
                        onClick={() => navigate("/contactUs")}
                    >
                    Contact Us
                    </button>
                </div>
                {/* Mobile Burger Menu and X Icon */}
                <div className="flex md:hidden">
                    {showX ? (
                        <IoClose onClick={toggleMenu} />
                    ) : (
                        <GiHamburgerMenu onClick={toggleMenu} />
                    )}
                </div>
            </nav>
        </>
    );
};

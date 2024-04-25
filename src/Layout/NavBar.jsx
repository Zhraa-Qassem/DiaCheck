import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
      title: "Blogs",
      route: "/blogs",
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
                <div className="fixed top-0 left-0 flex-col w-full h-full z-50 text-black bg-blue-600 shadow-lg pt-16 flex md:hidden">
                    <div className="flex flex-col gap-4 w-screen justify-center items-center text-xl pt-10">
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
                                        ? "underline underline-offset-4 decoration-sky-500"
                                        : ""
                                }
                            >
                                Login
                            </NavLink>
                            <button
                                className="rounded-lg text-black bg-primary px-4 py-1"
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
            <nav className=" bg-white border border-def-gray wrapper p-4 flex items-center justify-between text-black gap-16 fixed w-screen z-50">
                {/* Left Section */}
                <div className="flex items-center gap-5 grow-0">
                    {/* Logo */}
                    <Link to={"/"} onClick={closeMenu}>
                    Dia<span className="text-def-blue ">Detect</span> 
                    </Link>
                    {/* Languages */}
                    
                </div>
                {/* Middle */}
                <div className="items-center gap-10 hidden md:flex grow">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.route}
                            className={(navData) =>
                                navData.isActive
                                    ? "underline underline-offset-4 decoration-yellow-600"
                                    : ""
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
                {/* Right Side */}
                <div className="hidden md:flex items-center gap-6 grow-0">
                    <a href="/login">Login</a>
                    <button
                        href=""
                        className="rounded-lg text-black bg-primary px-4 py-1"
                        onClick={() => navigate("/signup")}
                    >
                        Sign up
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

import React, { useContext, useEffect, useState } from "react";
import logoImg from "../assets/logo.png";
import userImg from "../assets/user.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import Navbar from "./Navbar";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {
    navigate,
    user,
    setUser,
    searchQuery,
    setSearchQuery,
    getCartCount,
    setShowUserLogin,
  } = useContext(ShopContext);
  const isShopPage = useLocation().pathname.endsWith("/shop");
  const toggleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    if (searchQuery.length > 0 && !isShopPage) {
      navigate("/shop");
    }
  }, [searchQuery]);

  return (
    <header className="absolute top-0 left-0 right-0 max-padd-container flexBetween gap-4 py-2">
      <div className="flex flex-1">
        <Link to="/" className="blod-22 xl:bold-28 flex items-end gap-1">
          <img src={logoImg} alt="" className="hidden sm:block h-9" />
          <div className="sm:relative top-1.5">
            Zibook<span className="text-secondary"></span>
          </div>
        </Link>
      </div>

      <div className="flex-1">
        <Navbar
          setMenuOpened={setMenuOpened}
          containerStyles={`${
            menuOpened
              ? "flex items-center flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
              : "hidden lg:flex gap-x-5 xl:gap-x-7 medium-15 ring-1 ring-slate-900/15 rounded-full p-1 bg-primary"
          }`}
        />
      </div>

      <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
        <div className="relative hidden xl:flex items-center">
          <div
            className={`bg-white ring-1 ring-slate-900/10 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
              showSearch
                ? "w-[266px] opacity-100 px-4 py-2.5"
                : "w-0 opacity-0 p-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search book..."
              className="bg-transparent w-full text-sm outline-none pr-10 placeholder:text-gray-400"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div
            onClick={() => setShowSearch((prev) => !prev)}
            className="absolute right-0.5 bg-primary p-2.5 rounded-full cursor-pointer z-10"
          >
            <FaSearch className="text-xl" />
          </div>
        </div>
        <>
          {menuOpened ? (
            <FaBarsStaggered
              onClick={toggleMenu}
              className="text-xl cursor-pointer lg:hidden"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-xl cursor-pointer lg:hidden"
            />
          )}
        </>
        <Link to={"/cart"} className="flex relative">
          <div className="blod-16">
            Cart
            <span className="bg-secondary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md">
              {getCartCount()}
            </span>
          </div>
        </Link>

        <div className="group relative">
          <div>
            {user ? (
              <div className="flex gap-2 items-center cursor-pointer rounded-full bg-white">
                <img src={userImg} alt="user-img" height={44} width={44} />
              </div>
            ) : (
              <button
                onClick={() => setShowUserLogin(true)}
                className="btn-light flexCenter gap-x-2"
              >
                Login <RiUserLine className="text-xl" />
              </button>
            )}
          </div>
          {user && (
            <ul className="bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-10 hidden group-hover:flex flex-col medium-14 shadow-md z-50">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-2 rounded-md hover:bg-primary cursor-pointer"
              >
                Orders
              </li>
              <li className="p-2 rounded-md hover:bg-primary cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

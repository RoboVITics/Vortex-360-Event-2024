import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { BiGroup, BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import isLoggedIn from '../../auth/isLoggedIn';
import { Navigate, Outlet } from 'react-router-dom';

import './Sidebar.css';
import Cookies from "universal-cookie";
import { CookiesProvider, useCookies } from "react-cookie";


const cookies = new Cookies();
const routes = [
  {
    path: "/user/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/user/profile",
    name: "Profile",
    icon: <FaUser />,
  },
  {
    path: "/user/teams",
    name: "Teams",
    icon: <BiGroup />,
  },
  
  {
    path: "/user/submissions",
    name: "Submission",
    icon: <MdForum/>,
  },
];

const SideBar = ({ children }) => {
const [cookie, setCookie, removeCookie] = useCookies(['jwt']);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleLogout = () => {
    localStorage.clear();
    removeCookie("jwt");
  }

  return (
    <>
      <div className={`main-container Sidebar ${isOpen ? "open" : ""}`}>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  VORTEX-360
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => (
              <NavLink
                to={route.path}
                key={index}
                className="links"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
            <NavLink
                className="links"
                activeClassName="active"
                onClick={handleLogout}
              >
                <div className="icon"><BiLogOut /></div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      Logout
                    </motion.div>
                  )}
                </AnimatePresence>
            </NavLink>
          </section>
        </motion.div>
        <main className='main-container'>
          {isLoggedIn() ? <Outlet/> : <Navigate to="/login" />}
          {children}
        </main>

      </div>
    </>
  );
};

export default SideBar;
import { useState, useEffect } from "react";
import { assets, childrenList } from "../assets/asset";
import { Link, NavLink } from "react-router-dom";
import { LuBell, LuPlus, LuSettings } from "react-icons/lu";
import ThemeButton from "./Theme";
import { Tooltip } from "react-tooltip";

const getLogoSrc = (themeMode) =>
  themeMode === "dark-mode" ? assets.brand.white_logo : assets.brand.dark_logo;

const profileColors = ["#FF5733", "#33C1FF", "#85FF33", "#F39C12", "#8E44AD"];

const ParentNavbar = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const handleStorage = () => {
      setThemeMode(localStorage.getItem("theme"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeMode(localStorage.getItem("theme"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const logoSrc = getLogoSrc(themeMode);

  const loggedInUser = childrenList[0];

  const getInitials = (fullName) => {
    if (!fullName || typeof fullName !== "string") return "";

    const names = fullName.trim().split(/\s+/);
    if (names.length >= 2) {
      return names[0][0].toLowerCase() + names[1][0].toLowerCase();
    } else {
      return names[0][0].toLowerCase();
    }
  };

  return (
    <>
      <div className="parent-header">
        <div className="container">
          <div className="content">
            <div className="left">
              <Link to={"/"}>
                <img src={logoSrc} alt="" />
              </Link>
              <div className="child_list">
                <ul>
                  {loggedInUser.children.map((child, index) => {
                    const tooltipId = `child-tooltip-${index}`;
                    return (
                      <li
                        key={index}
                        className="profile"
                        style={{
                          backgroundColor:
                            profileColors[index % profileColors.length],
                        }}
                      >
                        <span id={tooltipId}>{getInitials(child.name)}</span>
                        <Tooltip
                          className="tooltip"
                          anchorId={tooltipId}
                          content={child.name}
                        />
                      </li>
                    );
                  })}

                  <li className="add">
                    <span>
                      <LuPlus />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <NavLink to={"/parent"}>
                    <span>Overview</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/parent/children"}>
                    <span>Children</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/parent/measures"}>
                    <span>Measurements</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/parent/insights"}>
                    <span>Insights</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="right">
              <button className="notifications">
                <span>
                  <LuBell />
                </span>
                <span
                  className={
                    loggedInUser.notifications.some((n) => !n.isRead)
                      ? "counts"
                      : ""
                  }
                ></span>
              </button>
              <button className="theme-btn">
                <span>
                  <ThemeButton />
                </span>
                <span className="counts"></span>
              </button>
              <button className="user_profile">
                <span>{getInitials(loggedInUser.fullname)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentNavbar;

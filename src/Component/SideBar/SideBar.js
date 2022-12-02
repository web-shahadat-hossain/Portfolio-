import React from "react";
import "../../Assets/Style/sidebar.css";
import logo from "../../Assets/Images/logo.svg";

const SideBar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav_logo">
        <img src={logo} alt="logo" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="Nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="Nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="Nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="Nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio " className="Nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#blog" className="Nav_link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="Nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright">&copy; 2022- 2023.</span>
      </div>
    </aside>
  );
};

export default SideBar;

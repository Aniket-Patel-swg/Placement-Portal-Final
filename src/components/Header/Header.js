import React from "react";

import logo from "../../images/navLogo.png";

import styles from "./Header.module.css";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      </div>
      <div className={styles.right}>
        <Link to="/">
          <img src={logo} alt="Resume" />
        </Link>
      </div>
      <div className="nav-links">
        <ul className="nav-links-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/tables">tables</a>
          </li>
          <li>
            <a href="/club">Clubs</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a href="/">Link 3</a>
          </li>
          <li>
            <a href="/">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
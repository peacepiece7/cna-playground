import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3 className={styles.siteName}>NODE BIRD</h3>
        <h3 className={styles.title}>{children}</h3>
      </div>
      <div>
        <button type="button">
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </button>
        <button type="button">
          <Link href="/">
            <a>Home</a>
          </Link>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './header.module.css'

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3 className={styles.siteName}>NODE BIRD</h3>
        <h3 className={styles.title}>{children}</h3>
      </div>
      <div>
        <button>
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </button>
        <button>
          <Link href="/">
            <a>Home</a>
          </Link>
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header

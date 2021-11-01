import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'

import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <Menu className={styles.nav}>
      <Menu.Item className={styles.link}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item className={styles.link}>
        <Link href="/profile">profile</Link>
      </Menu.Item>
      <Menu.Item className={styles.link}>
        <Link href="/signup">signup</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navigation

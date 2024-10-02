import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss';

const Layout = () => {
  // 기본적인 layout은 header와 footer로 감싸지고,
  // 그 사이에 children component가 들어온다.
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
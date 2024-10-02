import React from 'react'
import { BsGithub } from 'react-icons/bs';
import styles from './Footer.module.scss';

const Footer = () => {
  // 레이아웃의 하단, 즉 footer를 구성하는 컴포넌트
  return (
    <footer className={styles.footer}>
      <div className='container'>
        {/* 링크를 통해 gihub와 연동한다. */}
        <div className={styles.contacts}>
          <a href="https://github.com">
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
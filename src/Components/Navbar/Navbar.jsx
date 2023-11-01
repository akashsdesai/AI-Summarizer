import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../Assets/logo.png'
export default function Navbar() {
  return (
    <nav>
      <div className={styles.left}>
        <img src={logo} />
      </div>
      <div className={styles.right}>
        <button onClick={()=>{
          window.open('https://akash-sh-desai-portfolio.netlify.app/')
        }}>Portfolio</button>
      </div>
    </nav>
  )
}

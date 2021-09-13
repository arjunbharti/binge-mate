import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
          <div className={styles.name}>
            <Link style={{fontSize: "20px"}} to="/">Welcome to BingeMate <span>📺</span>🍿</Link>
          </div>
          {/* <div className={styles.sections}>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/about">About</Link>
          </div> */}
        </div>
    )
}

export default Navbar

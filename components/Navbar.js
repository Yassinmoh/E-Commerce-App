import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.logo}> LOGO</div>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/cart'>
                                <a>Cart</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
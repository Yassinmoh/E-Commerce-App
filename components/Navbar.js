import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo"> LOGO</div>
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
        </nav>
    )
}

export default Navbar
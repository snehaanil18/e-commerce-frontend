
import React from 'react'
import Link from 'next/link';
import styles from './navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                E-Perfumes
            </div>
            <div className={styles.navElements}>
                <ul>
                <li>
                        <Link href={'/'}>Products</Link>
                    </li>
                    <li>
                        <Link href={'/cart'}>Cart</Link>
                    </li>
                    <li>
                        <Link href={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link href={'/register'}>Register</Link>
                    </li>
                </ul>



            </div>
        </div>
    )
}

export default Navbar
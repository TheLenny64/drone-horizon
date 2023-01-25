import styles from './Navbar.module.css'
import { useState } from 'react'
import Image from 'next/image';
import DroneHorizonLogo from "../../../public/drone_horizon_logo.png"
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div
                onClick={() => toggleMenu()}
                className={`${isOpen ? styles.burgerIconOpen : styles.burgerIcon}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Link href={"/"}>
                <Image
                    style={{ cursor: "pointer" }}
                    src={DroneHorizonLogo}
                    width={90}
                    height={50}
                />
            </Link>

            <div className={`${isOpen ? styles.navMenuOpen : styles.navMenu}`}>
                <ul>
                    <Link href={"/product"}><li onClick={() => toggleMenu()}>Unser Produkt</li></Link>
                    <Link href={"/about"}><li onClick={() => toggleMenu()}>Über uns</li></Link>
                    <Link href={"/contact"}><li onClick={() => toggleMenu()}>Kontakt</li></Link>
                </ul>
            </div>
        </nav>
    )
}
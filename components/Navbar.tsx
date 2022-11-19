'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { Barlow_Condensed } from '@next/font/google';
import styles from './NavBar.module.css'
import { useState } from 'react';

const barlow = Barlow_Condensed({
  weight: '400'
})

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { id: 0, label: 'Home', link: '/'},
    { id: 1, label: 'Destination', link: '/destinations'},
    { id: 2, label: 'Crew', link: '/crew'},
    { id: 3, label: 'Technology', link: '/technologies'},
  ]

  const pathname = usePathname();
  return <nav className={styles.navBar}>
    <Image src={'/assets/shared/logo.svg'} alt='logo' width={48} height={48}></Image>
    <div className={styles.navLineContainer}><div className={styles.navLine}></div></div>
    <button className={`${styles.toggle} ${!open && styles.toggleOff}`} onClick={() => setOpen(!open)}>
      <div className={styles.toggleLine}/>
    </button>
    <div className={`${styles.menu} ${!open && styles.close}`}>
      <ul className={styles.navLinks}>
        {navLinks.map(link => (
          <li className={`${styles.navItemContainer} nav-text ${pathname === link.link && styles.selectedItem} ${barlow.className}`} key={link.id}>
            <span aria-hidden="true" className={styles.navLinkIndex}>{link.id.toString().padStart(2, '0')}</span>
            <Link className={styles.navLinkItem} href={link.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul> 
    </div>
  </nav>;
}
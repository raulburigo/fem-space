'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Barlow_Condensed } from '@next/font/google';
import styles from './Selector.module.css'

const barlow = Barlow_Condensed({
  weight: '400'
})

export default function Selector({options}: {options: string[]}) {
 

  const pathname = usePathname();
  const isCurrentRoute = (link: string) => {
    if (link === '/') return link === pathname
    return pathname?.includes(link)
  }
  return <ul className={styles.navLinks}>
        {options.map(op => (
          <li key={op}
          className={
            `${styles.navItemContainer}
            nav-text
            ${isCurrentRoute(op) && styles.selectedItem}
            ${barlow.className}`} >
            <Link href={`/destinations/${op}`}  className={styles.navLinkItem} >
              {op}
            </Link>
          </li>
        ))}
      </ul> 
  
}
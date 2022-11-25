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

export default function Selector({options}: {options: string[]}) {
 

  const pathname = usePathname();
  const isCurrentRoute = (link: string) => {
    if (link === '/') return link === pathname
    return pathname?.includes(link)
  }
  return <ul>
        {options.map(op => (
          <li key={op}>
            <Link href={`/destinations/${op}`}>
              {`${isCurrentRoute(op) ? '->' : ''}${op}`}
            </Link>
          </li>
        ))}
      </ul> 
  
}
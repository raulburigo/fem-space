'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import styles from './BgContainer.module.css'

export default function BgContainer({children}: PropsWithChildren) {
  const pathname = usePathname();
  const pathContainer = (path: string) => {
    switch (path.split('/')[1]) {
      case 'destinations':
        return 'destination'
      case 'crew':
        return 'crew'
      case 'technologies':
        return 'technology'
      default:
        return 'home' 
    }
  }

  return (
    <div
      className={`
        ${styles.container} 
        ${styles[pathContainer(pathname ??  '')]}
      `}>
        {children}
    </div>)
}  
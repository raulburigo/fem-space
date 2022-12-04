import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { Barlow_Condensed } from '@next/font/google';
import RoudedButton from '../components/RoudedButton';


const barlow = Barlow_Condensed({
  weight: '400'
})


export default async function Home() {



  return (
    // <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.top}>
          <p className={`heading-5 ${barlow.className}`}>So, you want to travel to</p>
          <h1>Space</h1>
          <div>
            <p className='description'>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
        </div>
        <RoudedButton title='EXPLORE'/>
      </main>
    // </div>
  )
}

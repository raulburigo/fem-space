import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';


async function getData(): Promise<any> {
  const res = await fetch("");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Home() {

  // const {results} = await getData();


  return (
    <div className={styles.container}>
      {/* <main className={styles.main}>
        <p>So, you want to travel to</p>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        <div><p>Explore</p></div>
      </main> */}
    </div>
  )
}

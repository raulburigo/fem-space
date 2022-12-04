import { Destination } from '../../../types';
import styles from './page.module.css'
import Image from 'next/image'

import { redirect } from 'next/navigation';
import Link from 'next/link';
import Selector from '../../../components/Selector';
import { Barlow_Condensed } from '@next/font/google';


const barlow = Barlow_Condensed({
  weight: '400'
})
const barlowBold = Barlow_Condensed({
  weight: '700'
})

async function getDestinations(): Promise<Destination[]> {
  const res = await fetch('https://fem-space-orpin.vercel.app/api/destination');
  
  return res.json();
}
async function getDestinationDetails(name: string): Promise<Destination> {
  const res = await fetch(`https://fem-space-orpin.vercel.app/api/destination/${name}`);
  
  return res.json();
}

export default async function Destinations({ params }: {
  params: { slug: string },
}) {
  const data = await getDestinations();

  if (!params.slug) redirect(`/destinations/${data[0].name}`)
  const name = params.slug ? params.slug[0] : data[0].name
  const details = await getDestinationDetails(name.toLowerCase());
  

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p className={`heading-5 ${barlow.className}`}>
          <span className={barlowBold.className}>01</span>
          Pick your destination
        </p>

      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={details.images.png}
            alt={`Picture of the ${details.name}`}
            fill
            style={{zIndex: 1}}
            sizes="(min-width: 35em) 300px,
              (min-width: 55em) 445px,
              170px"
          />
        </div>
        <div className={styles.details}>
          <Selector options={data.map(d => d.name)}/>
          <h2>{details.name.toUpperCase()}</h2>
          <p className='description'>{details.description}</p>
          <div className={styles.travelInfoContainer}>
            <div >
              <p className={`${barlow.className} ${styles.travelInfoLabel}`}>AVG. DISTANCE</p>
              <p className={styles.travelInfo}>{details.distance}</p>
            </div>
            <div>
              <p className={`${barlow.className} ${styles.travelInfoLabel}`}>EST. TRAVEL TIME</p>
              <p className={styles.travelInfo}>{details.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

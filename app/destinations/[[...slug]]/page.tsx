import { Destination } from '../../../types';
import styles from './page.module.css'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Selector from '../../../components/Selector';

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
    <div className={styles.container}>
      <p> 01 Pick your destination</p>
      <Selector options={data.map(d => d.name)}/>
      <p>{details.name.toUpperCase()}</p>
      <p>{details.description}</p>
      <Image src={details.images.png} alt={details.name} width={200} height={200}/>
      <p>AVG. DISTANCE</p>
      <p>{details.distance.toUpperCase()}</p>
      <p>EST. TRAVEL TIME</p>
      <p>{details.travel.toUpperCase()}</p>
    </div>
  )
}


/* Catch-all and Optional Catch-all Segments
Dynamic Segments can be extended to catch-all by adding an ellipsis inside the brackets [...folderName].

For example, app/blog/[...slug]/page.js can match /blog/a, but also /blog/a/b, /blog/a/b/c, and so on.

Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].

For example, app/blog/[[...slug]]/page.js will match /blog, /blog/a, /blog/a/b, and so on.

The main difference between catch-all and optional catch-all segment is that with optional, the route without the parameter is also matched (/blog in the example above).

 */
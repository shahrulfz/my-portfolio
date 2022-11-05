import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroBanner from '../src/components/general/HeroBanner'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-3xl font-bold underline">
        Under construction
      </div>

      <HeroBanner />

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/Card'
import Greeting from '@/components/Greeting'
import LocationDateReserve from '@/components/DateReserve'

export default function Home() {
  return (
   <main  className="w-[100%] flex flex-col items-center space-y-4">
    <div className={styles.header}>
        Vaccine Booking
    </div>
    <LocationDateReserve/>
    <button type="submit" name= "Book Vaccine" className="bg-white">Book Vaccine</button>
   </main>
  )
}

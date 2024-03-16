import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/Card'
import Greeting from '@/components/Greeting'


export default function Home() {
  const data={
    name : "Anan",
    lastname : "Doe"
  }

  return (
   <main>
    <Banner/>
    {/* <Greeting name="John" lastname="Doe"/>
    <Greeting {...data}/> */}
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
      <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
      <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
      <ProductCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
    </div>
   </main>
  )
}

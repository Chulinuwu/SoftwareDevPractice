import styles from './banner.module.css'
import Image from 'next/image'


export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src ={'/img/cover.jpg'} 
      alt='cover'
      fill={true}
      priority={true}
      objectFit='cover'
      />
      <div className={styles.bannerText}>
        <h1>Vaccine Service Center</h1>
        <h3>get vaccinated with us</h3>
        
        <h5 className={styles.pText}> in light of the ongoing battle against COVID-19 and the critical importance of vaccination in mitigating its spread and protecting ourselves and those around us, we are extending a heartfelt invitation to each and every one of you to join us in taking this vital step towards a safer and healthier future by getting vaccinated at our organized clinics, staffed with dedicated healthcare professionals, as your decision to get vaccinated not only safeguards your own well-being by significantly reducing the risk of severe illness, hospitalization, and death caused by the virus but also plays a pivotal role in protecting the most vulnerable among us and in collectively striving towards the eventual eradication of this pandemic, thereby contributing to the restoration of normalcy in our lives and the revitalization of our community.</h5>

        <button className={styles.button} role="button">Get Start!</button>

        </div>
    </div>
  );
}

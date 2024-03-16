import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function ProductCard({ hospitalName,imgSrc}:{ hospitalName :string , imgSrc : string}) {
    
    
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                alt='Hospital Picture'
                fill={true}
                objectFit='contain'
                />
             </div>
             <div className={styles.cardText}>{hospitalName}</div>
        </InteractiveCard>
    );
}

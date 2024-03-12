import React from 'react'
import { BlackCustomButton } from '../qbStrap'
import styles from '../../styles/pricing/pricingDesktop.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import content from '../../language/ENGLISH.json';

const EnterprisePlan = () => {
    const router = useRouter();
    const { planDesc, planHeading } = content.pricing
    
    return (
        <div className={styles.enterprise_plan_container}>
            <div className={styles.text_side}>
                <h4>{planHeading}</h4>
                <p>{planDesc}</p>
                <BlackCustomButton text="Let's Talk" style={{padding: '0 2rem'}} onClick={()=> router.push("/get-free-demo") } />
            </div>
            <div className={styles.image_side}>
                <div className={styles.coffee_img}><Image src="/assets/pricing/coffee_cup.webp" alt='coffee' fill /></div>
            </div>
        </div >
    )
}

export default EnterprisePlan
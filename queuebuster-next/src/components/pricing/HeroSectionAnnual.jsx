import React, { useState } from 'react'
import styles from '../../styles/pricing/pricingDesktop.module.css';
import { WhiteCustomButton } from '../qbStrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import content from '../../language/ENGLISH.json';

const HeroSectionAnnual = ({ textSize }) => {
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const router = useRouter();

    const { individualText, individualDesc, perDeviceYear, individualP1, individualP2, individualP3, individualP4, individualP5, individualP6, individualP7 } = content.pricing

    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };


    return (
        <div className={styles.annual_component} onMouseOver={() => setButtonVisibility(true)} onMouseLeave={() => setButtonVisibility(false)}>
            <div className={styles.part1}>
                <h4>{individualText}</h4>
                <p className={styles.desc}>{individualDesc}</p>
                <p className={styles.price}>₹9999 <span>₹11998</span> <span className={styles.price_text}><br />{perDeviceYear}</span></p>
            </div>
            <div className={styles.list_container}>
                <ul className={styles.list_items}>
                    <li><span>{individualP1}</span></li>
                    <li><span>{individualP2}</span></li>
                    <li><span>{individualP3}</span></li>
                    <li><span>{individualP4}</span></li>
                    <li><span>{individualP5}</span></li>
                    <li><span>{individualP6}</span></li>
                    <li style={{ border: 'none' }}><span>{individualP7}</span></li>
                </ul>
                <div className={`${buttonVisibility ? styles.button_visible : styles.hide_button}`}>
                    <Link href='#pricingTable' onClick={(e) => handleScroll(e)}>
                        <WhiteCustomButton text="Know More" style={{
                            padding: '0 2rem',
                            width: '100%',
                            fontSize: textSize
                        }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionAnnual
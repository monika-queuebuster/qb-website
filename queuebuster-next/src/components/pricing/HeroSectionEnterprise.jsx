import React, { useState } from 'react'
import styles from '../../styles/pricing/pricingDesktop.module.css';
import { WhiteCustomButton } from '../qbStrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import content from '../../language/ENGLISH.json';

const HeroSectionEnterprise = ({ textSize }) => {
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const router = useRouter();

    const { enterpriseText, enterpriseContent, enterpriseP1, enterpriseP2, enterpriseP3, enterpriseP4, enterpriseP5, enterpriseP6, enterpriseP7, enterpriseP8, enterpriseP9, enterpriseP10 } = content.pricing

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
        <div className={styles.enterprise_component} onMouseOver={() => setButtonVisibility(true)} onMouseLeave={() => setButtonVisibility(false)}>
            <div className={styles.part1}>
                <h4>{enterpriseText}</h4>
                <p className={styles.desc}>{enterpriseContent}</p>
            </div>
            <div>
                <ul className={styles.list_items}>
                    <li><span>{enterpriseP1}</span></li>
                    <li><span>{enterpriseP2}</span></li>
                    <li><span>{enterpriseP3}</span></li>
                    <li><span>{enterpriseP4}</span></li>
                    <li><span>{enterpriseP5}</span></li>
                    <li><span>{enterpriseP6}</span></li>
                    <li><span>{enterpriseP7}</span></li>
                    <li><span>{enterpriseP8}</span></li>
                    <li><span>{enterpriseP9}</span></li>
                    <li style={{ border: 'none' }}><span>{enterpriseP10}</span></li>
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

export default HeroSectionEnterprise
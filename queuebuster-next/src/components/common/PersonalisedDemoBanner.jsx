import React from 'react'
import styles from '../../styles/common/PersonalisedDemoBanner.module.css';
import { WhiteCustomButton } from '../qbStrap';
import Image from 'next/image';
import Router from 'next/router';
import content from '../../language/ENGLISH.json'

const PersonalisedDemoBanner = ({btnText, setDemoModal, setHeading}) => {
    const { PDBannerH1, PDBannerH2, PDBannerPara } = content.enterprise;
    const router = Router;
    return (
        <div className={styles.PD_banner}>
            <div>
                <h4 className={styles.PD_banner_heading}>Couldn't find what you wanted?</h4>
                <p className={styles.demo_desc}>Worry not, just send us your inquiry and wait while our experts contact you.</p>
                <WhiteCustomButton text={btnText ? btnText : 'Request a Call Back'} style={{ backgroundColor: '#fff', color: '#2A6AB4', border: 'none', borderRadius: '0.3rem', padding: '0 2rem' }} onClick={() => btnText === 'Contact Sales' ? router.push('/contact-sales') : (setDemoModal(true), setHeading("We’ll call you soon!"))} />
            </div>
            <div className={styles.demo_img}><Image src='/assets/features/estore/Group 73285.svg' alt='schedule demo' fill /></div>

        </div>
    )
}

export default PersonalisedDemoBanner
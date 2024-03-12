import React from 'react'
import styles from '../../styles/common/MobilePDBanner.module.css';
import { WhiteCustomButton } from '../qbStrap';
import Router from 'next/router';
import Image from 'next/image';
import content from '../../language/ENGLISH.json'

const MobilePDBanner = ({ btnText, setDemoModal, setHeading }) => {
    const router = Router
    const { PDBannerPara, mobilePDBannerH } = content.enterprise;
    return (
        <div className={styles.Mobile_PD_banner}>
            <div className={styles.demo_img}><Image src='/assets/features/estore/Group 73285.svg' alt='schedule demo' fill /></div>
            <h4 className={styles.Mobile_PD_banner_heading}>Couldn't find what you wanted?</h4>
            <p className={styles.demo_desc}>Worry not, just send us your inquiry and wait while our experts contact you.</p>
            <WhiteCustomButton text={btnText ? btnText : 'Request a Call Back'} styles={{ backgroundColor: '#fff', color: '#2A6AB4', border: 'none', borderRadius: '8px', width: '25.75rem' }}
                onClick={() => btnText === 'Contact Sales' ? router.push('/contact-sales') : (setDemoModal(true), setHeading("We’ll call you soon!"))}
            />
        </div>
    )
}

export default MobilePDBanner
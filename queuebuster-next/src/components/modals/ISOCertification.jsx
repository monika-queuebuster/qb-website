import React from 'react'
import Modal from 'react-modal';
import styles from '../../styles/modals/ISOCertification.module.css';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(2px)'
    },
};

const ISOCertification = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal_size} style={customStyles}>
            <div className={styles.modal_header}>
                <p className={styles.modal_heading}>ISO Certification 27001</p>
                <button className={styles.close_btn} onClick={closeModal}><RxCross2 /></button>
            </div>
            <div className={styles.image_container}>
                <div className={styles.certification_img}><Image src='/assets/certification.jpg' alt='ios certification' fill /></div>
            </div>
        </Modal>
    )
}

export default ISOCertification
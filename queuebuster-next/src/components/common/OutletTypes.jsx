import React from 'react'
import styles from '../../styles/common/OutletTypes.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const OutletTypes = ({ outletTypes }) => {
    const router = useRouter();
  return (
    <div className={styles.outlet_container}>
        {
            outletTypes?.map((ele)=> {
                return(
                    <div key={ele?.id} style={{backgroundColor: ele?.bgColor}} className={styles.outlet_element} onClick={()=>router.push(ele?.link)}>
                        <div className={styles.image_container}><Image src={ele?.image} alt={ele?.altText} fill /></div>
                        <span className={styles.outlet_name}>{ele?.title}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OutletTypes
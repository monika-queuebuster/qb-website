import React, { useEffect, useState } from 'react'
import styles from '../../styles/media/media.module.css'
import { newsHeadlines22to23 , newsHeadlines23to24, newsHeadlines24to25, years } from '@/constants/media.json'
import { CustomButton } from '../qbStrap'
import content from '@/language/ENGLISH.json';
import Image from 'next/image';


const MediaDesktop = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [paginationData, setPaginationData] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [selectedYear, setSelectedYear] = useState('24-25');
    const [selectedYrNews, setSelectedYrNews] = useState(newsHeadlines22to23);

    const { wallofFame, mediaKit, brandGuidelines, brandLogo } = content.media;
    const { careerOnmission1 } = content

    console.log("--year--", selectedYear);

    useEffect(()=> {
        const newsHeadlines = selectedYear === '22-23' ? newsHeadlines22to23 : selectedYear === '23-24' ? newsHeadlines23to24 : selectedYear === '24-25' ? newsHeadlines24to25 : null;
        setSelectedYrNews(newsHeadlines);
    },[selectedYear])

    useEffect(() => {
        const dataLength = selectedYrNews.length;
        const newArray = [];
        if (dataLength >= 10) {
            for (let i = 1; i <=  Math.ceil(dataLength / 10); i++) {
                newArray.push(i);
            }
        }
        else {
            newArray.push(1)
        }
        setTotalPage(newArray);

    }, [selectedYrNews])

    useEffect(() => {
        let si = 0;
        for (let i = 1; i < currentPage && selectedYrNews.length > 10; i++) {
            si += 10;
        }
        setPaginationData(selectedYrNews.slice(si, si + 10))

    }, [currentPage, selectedYrNews])

    const handlePagination = (page) => {
        setCurrentPage(page);
    }


    return (
        <>
            <div className={styles.page_heading_container}>
                <h1 className={styles.page_heading}>QB in News</h1>
            </div>

            <div className={styles.page_container}>
                <div className={styles.news_container}>
                    <div style={{ width: "15%", marginBottom: '2rem' }}>
                        <select className={styles.year_selection} onChange={(e)=>setSelectedYear(e.target.value)}>
                            {
                                years?.map((ele) => <option value={ele?.value}>{ele?.name}</option>)
                            }
                        </select>
                    </div>
                    <hr />
                    {
                        paginationData.map((ele) => {
                            return (
                                <div key={ele?.id} className={styles.news_box}>
                                    <div className={styles.news_logo} style={{width: ele?.width}}><Image src={ele?.newsLogo} alt='company logo' fill /></div>
                                    <h4 className={styles.news_headline}>{ele?.headline}</h4>
                                    <a className={styles.news_link} href={ele?.link} rel="noindex" target='_blank'>{`Read Full Story ->`}</a>
                                    <hr />
                                </div>
                            )
                        })

                    }
                    <div className={styles.pagination_container}>
                        {
                            totalPage.map((ele) => {
                                return (
                                    <div key={ele} className={`${currentPage === ele && styles.active_page} ${styles.pagination_box} ${totalPage.length === 1 && styles.hide}`} onClick={() => handlePagination(ele)}>{ele}</div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className={styles.download_section}>
                    <h4 className={styles.download_heading}>{careerOnmission1}<br /> {mediaKit}</h4>
                    <div className={styles.download_btn_container}>
                        <CustomButton text={brandLogo}
                            styles={{
                                backgroundColor: '#fff',
                                color: '#2A6AB4',
                                border: 'none'
                            }}
                            onClick={()=> window.open('https://quebuster.s3.ap-south-1.amazonaws.com/website/queuebuster/brand_images.zip')}
                        />
                        <CustomButton text={brandGuidelines}
                            styles={{
                                backgroundColor: '#fff',
                                color: '#2A6AB4',
                                border: 'none'
                            }}
                            onClick={()=> window.open('https://quebuster.s3.ap-south-1.amazonaws.com/website/queuebuster/QB+Brand+Guidelines.pdf')}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaDesktop
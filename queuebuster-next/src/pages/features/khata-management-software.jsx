import React from 'react'
import Loading from "../../components/common/Loading";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileKhata = dynamic(() => import('../../components/khata/MobileKhata'), {
    loading: () => <Loading />,
    ssr: false,
})
const DesktopKhata = dynamic(() => import('../../components/khata/DesktopKhata'), {
    loading: () => <Loading />,
    ssr: false,
})
const khataManagementSoftware = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>QB Khata- Udhar Bahi Khata & Ledger Accounting Software</title>
                <link rel="canonical" href="https://queuebuster.co/features/khata-management-software" />
                <link rel="alternate" href="https://queuebuster.co/features/khata-management-software" hrefLang="en" />
                <meta name="description" content="QB Khata: Simplify Udhar Bahi Khata & ledger accounting. Track credit, debts, and customer accounts digitally. Streamline your business finances effortlessly." />
                <meta property="og:title" content="QB Khata- Udhar Bahi Khata & Ledger Accounting Software Free with POS Billing Software" />
                <meta property="og:description" content="Manage your Udhar Bahi Khata effortlessly with QB Khata, the ultimate ledger accounting software. Keep track of credit transactions, debts, and customer accounts digitally. Try it today for efficient and hassle-free accounting software with POS." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/khata-og+(2).jpg" />
                <meta property="og:url" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/khata-og+(2).jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                     "@context": "https://schema.org",
                     "@type": "SoftwareApplication",
                     "name": "QueueBuster POS",
                     "operatingSystem": "Android & Cloud Dashboard",
                     "aggregateRating": {
                       "@type": "AggregateRating",
                       "ratingValue": "4.7",
                       "ratingCount": "1647"
                     }
                   }`,
                    }}
                ></script>
            </Head>
            {mobileView ? <MobileKhata /> : <DesktopKhata />}
        </>
    )
}

export default khataManagementSoftware
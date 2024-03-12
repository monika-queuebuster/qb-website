import React from 'react'
import Loading from "../../components/common/Loading";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const InventoryDesktop = dynamic(() => import('../../components/inventory/InventoryDesktop'), {
    loading: () => <Loading />,
    ssr: false,
})
const InventoryMobile = dynamic(() => import('../../components/inventory/InventoryMobile'), {
    loading: () => <Loading />,
    ssr: false,
})
const inventoryManagement = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Best Inventory Management Software Free With QueueBuster POS</title>
                <link rel="canonical" href="https://queuebuster.co/features/inventory-management-software" />
                <link rel="alternate" href="https://queuebuster.co/features/inventory-management-software" hrefLang="en" />
                <meta name="description" content="QueueBuster eStore: Build a Free Online Store or eCommerce website for Your Shop & Outlets. Quick setup, seamless transactions. Start selling online today!	Discover seamless customer management with QueueBuster's CRM & Loyalty Program features. Enhance loyalty, streamline communication & boost sales. Try it today!	QueueBuster's Inventory Management Software offers seamless real-time tracking solutions. Optimize stock levels and streamline operations effortlessly." />
                <meta property="og:title" content="QueueBuster Inventory Management Software for Real-Time Tracking Fee With POS Billing" />
                <meta property="og:description" content="Experience seamless inventory control with QueueBuster's Real-Time Tracking Software. Optimize stock levels, streamline operations, and enhance efficiency for your business." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/OG-Image_Inventory.webp" />
                <meta property="og:url" content="https://queuebuster.co/features/inventory-management-software" />
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
            {mobileView ? <InventoryMobile /> : <InventoryDesktop />}
        </>
    )
}

export default inventoryManagement
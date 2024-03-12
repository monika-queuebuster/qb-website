import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopMobileAccessories = dynamic(() => import('../../components/electronics/mobile-accessories/DesktopMobileAcc'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileMobileAccessories = dynamic(() => import('../../components/electronics/mobile-accessories/MobileMobileAcc'), {
    loading: () => <Loading />,
    ssr: false,
});
const mobileAccessories = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Mobile Shop Billing Software with POS & Inventory Management</title>
                <link rel="canonical" href="https://queuebuster.co/electronics/mobile-accessories" />
                <link rel="alternate" href="https://queuebuster.co/electronics/mobile-accessories" hrefLang='en' />
                <meta name="description" content="Streamline your mobile and accessories shop with cutting-edge billing software featuring POS and inventory management software with QueueBuster. Get a Free Demo." />
                <meta property="og:title" content="Mobile Shop Billing Software with POS & Inventory Management By QueueBuster POS" />
                <meta property="og:description" content="Streamline your mobile and accessories shop with cutting-edge billing software featuring POS and inventory management. Simplify POS operations and inventory control effortlessly. Get a Free Demo" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/mobile-accessories.jpg" />
                <meta property="og:url" content="https://queuebuster.co/electronics/mobile-accessories" />
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
            {mobileView ? <MobileMobileAccessories /> : <DesktopMobileAccessories />}
        </>
    )
}

export default mobileAccessories
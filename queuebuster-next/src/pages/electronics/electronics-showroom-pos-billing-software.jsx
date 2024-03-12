import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopElecShowroom = dynamic(() => import('../../components/electronics/electronics-showroom/DesktopElectronicsShowroom'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileElecShowroom = dynamic(() => import('../../components/electronics/electronics-showroom/MobileElectronicsShowroom'), {
    loading: () => <Loading />,
    ssr: false,
});
const electronicsShowroom = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Electronics & Electrical Shop Billing Software & Solutions</title>
                <link rel="canonical" href="https://queuebuster.co/electronics/electronics-showroom" />
                <link rel="alternate" href="https://queuebuster.co/electronics/electronics-showroom" hrefLang='en' />
                <meta name="description" content="Empower your electronics and electrical shop with tailored billing software and comprehensive shop management solutions. Call us and Book a Free Demo" />
                <meta property="og:title" content="Electronics & Electrical Shop Billing Software & Solutions | QueueBuster POS Billing" />
                <meta property="og:description" content="Empower your electronics and electrical shop with tailored billing software and comprehensive solutions. Streamline your operations, manage inventory, and enhance customer transactions seamlessly with our specialized suite of tools and solutions." />
                <meta property="og:url" content="https://queuebuster.co/electronics/electronics-showroom" />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/electronics-showroom.jpg" />
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
            {mobileView ? <MobileElecShowroom /> : <DesktopElecShowroom />}
        </>
    )
}

export default electronicsShowroom
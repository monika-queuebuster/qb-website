import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopHomeAppliances = dynamic(() => import('../../components/electronics/home-appliances/DesktopHomeApp'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileHomeAppliances = dynamic(() => import('../../components/electronics/home-appliances/MobileHomeApp'), {
    loading: () => <Loading />,
    ssr: false,
});
const homeAppliances = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Home Appliances Store Billing Software & Shop Management</title>
                <link rel="canonical" href="https://queuebuster.co/electronics/home-appliances" />
                <link rel="alternate" href="https://queuebuster.co/electronics/home-appliances" hrefLang='en' />
                <meta name="description" content="Advanced billing software tailored for home appliances stores, providing seamless shop management tools for efficient daily inventory checks and sales tracking." />
                <meta property="og:title" content="Home Appliances Store Billing Software & Shop Management | Multi Store Management" />
                <meta property="og:description" content="Revolutionize your home appliances store management with powerful billing software and shop management tools. Experience the ease of multi-store oversight while effortlessly handling inventory, sales, and operations." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/home-appliances.jpg" />
                <meta property="og:url" content="https://queuebuster.co/electronics/home-appliances" />
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
            {mobileView ? <MobileHomeAppliances /> : <DesktopHomeAppliances />}
        </>
    )
}

export default homeAppliances
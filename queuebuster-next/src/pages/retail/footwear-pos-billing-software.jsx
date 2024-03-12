import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopFootwear = dynamic(() => import('../../components/retail/footwear/DesktopFootwear'), {
    loading: () => <Loading />,
    ssr: false,
});

const MobileFootwear = dynamic(() => import('../../components/retail/footwear/MobileFootwear'), {
    loading: () => <Loading />,
    ssr: false,
});

const footwear = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Footwear Store Billing Software | Shoes Shop Billing Software</title>
                <link rel="canonical" href="https://queuebuster.co/retail/footwear" />
                <link href="https://queuebuster.co/retail/footwear" hrefLang='en' />
                <meta name="description" content="Manage shoe inventory, streamline sales, and enhance customer experiences effortlessly with our tailored footwear store billing software solutions." />
                <meta property="og:title" content="Footwear Store Billing Software with POS, Inventory Management & Daily Reporting" />
                <meta property="og:description" content="Elevate your footwear store with specialized billing software from QueueBuster POS. Manage shoe inventory, streamline sales, and enhance customer experiences effortlessly with our tailored solutions." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/footwear.jpg" />
                <meta property="og:url" content="https://queuebuster.co/retail/footwear" />
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
            {
                mobileView ? <MobileFootwear /> : <DesktopFootwear />
            }
        </>
    )
}

export default footwear
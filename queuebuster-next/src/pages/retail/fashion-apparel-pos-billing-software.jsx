import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopFashion = dynamic(() => import('../../components/retail/fashion-apparel/DesktopFashion'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileFashion = dynamic(() => import('../../components/retail/fashion-apparel/MobileFashion'), {
    loading: () => <Loading />,
    ssr: false,
});


const fashionApparel = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Fashion Store, Garment Shop and Apparel Billing Software</title>
                <link rel="canonical" href="https://queuebuster.co/retail/fashion-apparel" />
                <link href="https://queuebuster.co/retail/fashion-apparel" hrefLang='en' />
                <meta name="description" content="Fashion Store, garment shop and apparel billing software with POS , inventory management, customer loyalty program and daily sales reporting. Book a Free Demo" />
                <meta property="og:title" content="Fashion Store, Garment Shop and Apparel Billing Software with POS and Inventory Management" />
                <meta property="og:description" content="Experience seamless operations for your fashion, garment, or apparel store with our comprehensive billing software. Manage inventory, engage customers through loyalty programs, track daily sales effortlessly, and book a free demo to explore more." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/fashion-apparel.jpg" />
                <meta property="og:url" content="https://queuebuster.co/retail/fashion-apparel" />
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
                mobileView ? <MobileFashion /> : <DesktopFashion />
            }
        </>
    )
}

export default fashionApparel
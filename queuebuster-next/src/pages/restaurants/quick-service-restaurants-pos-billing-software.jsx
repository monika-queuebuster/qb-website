import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopQSR = dynamic(() => import('../../components/restaurants/qsr/DesktopQSR'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileQSR = dynamic(() => import('../../components/restaurants/qsr/MobileQSR'), {
    loading: () => <Loading />,
    ssr: false,
});

const qsr = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>QSR POS Billing Software and Fast Food POS Billing Software</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/quick-service-restaurants" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/quick-service-restaurants" hrefLang='en' />
                <meta name="description" content="Enhance your quick service restaurant with specialized management software and efficient fast food POS billing software & solutions. Call us & Book a free demo" />
                <meta property="og:title" content="Quick Service Restaurant Management Software |  Fast Food POS Billing Software" />
                <meta property="og:description" content="Enhance your quick service restaurant with specialized management software and efficient fast food POS billing solutions. Streamline operations, manage orders, and boost efficiency for a seamless customer experience." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/qsr.jpg" />
                <meta property="og:url" content="https://queuebuster.co/restaurants/quick-service-restaurants" />
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
                mobileView ? <MobileQSR /> : <DesktopQSR />
            }
        </>
    )
}

export default qsr
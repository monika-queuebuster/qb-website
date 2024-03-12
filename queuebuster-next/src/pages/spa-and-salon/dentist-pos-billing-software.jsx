import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopDentist = dynamic(() => import('../../components/spa-salon/dentist/DesktopDentist'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileDentist = dynamic(() => import('../../components/spa-salon/dentist/MobileDentist'), {
    loading: () => <Loading />,
    ssr: false,
});

const dentistPOSBillingSoftware = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Dental Clinic Management & Billing Software in India - Try It Free</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/fine-dine" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/fine-dine" hrefLang='en' />
                <meta name="description" content="Dental clinic management made easy! Simplify billing, appointments, and advance booking with QueueBuster POS. Get started with a free trial." />
                <meta property="og:title" content="Dental Clinic Management & Billing Software in India - Get Started With a Free Trial" />
                <meta property="og:description" content="Experience effortless dental clinic management with QueueBuster POS. Simplify billing, appointments, and advance booking. Start your free trial today." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/dentist.jpg" />
                <meta property="og:url" content="https://queuebuster.co/restaurants/fine-dine" />
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
                mobileView ? <MobileDentist /> : <DesktopDentist />
            }
        </>
    )
}

export default dentistPOSBillingSoftware
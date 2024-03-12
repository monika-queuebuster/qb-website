import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopSpa = dynamic(() => import('../../components/spa-salon/spa/DesktopSpa'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileSpa = dynamic(() => import('../../components/spa-salon/spa/MobileSpa'), {
    loading: () => <Loading />,
    ssr: false,
});

const spaPOSBillingSoftware = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Spa Scheduling, Booking and Appointment Management Software</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/fine-dine" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/fine-dine" hrefLang='en' />
                <meta name="description" content="Easily manage spa appointments and bookings with QueueBuster POS. Streamline scheduling and enhance the customer experience with integrated billing. Request a demo today!" />
                <meta property="og:title" content="Spa Scheduling, Booking and Appointment Management Software in India - Get a Free Demo" />
                <meta property="og:description" content="Easily manage spa appointments and bookings with QueueBuster POS. Streamline scheduling and enhance the customer experience with integrated billing. Experience efficiency firsthand with a free demo." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/spa.jpg" />
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
                mobileView ? <MobileSpa /> : <DesktopSpa />
            }
        </>
    )
}

export default spaPOSBillingSoftware
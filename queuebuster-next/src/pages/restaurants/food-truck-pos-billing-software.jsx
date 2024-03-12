import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";


const DesktopFineDine = dynamic(() => import('../../components/restaurants/foodTruck/DesktopFoodTruck'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileFineDine = dynamic(() => import('../../components/restaurants/foodTruck/MobileFoodTruck'), {
    loading: () => <Loading />,
    ssr: false,
});

const foodTruck = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Food Truck POS Billing Software & Management Solutions</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/food-truck" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/food-truck" hrefLang='en' />
                <meta name="description" content="Elevate your food truck business with tailored POS billing software and comprehensive food truck management solutions. Call Us & Book a Free Demo." />
                <meta property="og:title" content="Food Truck POS Billing Software & Food Truck  Management Solutions" />
                <meta property="og:description" content="Elevate your food truck business with tailored POS billing software and comprehensive management solutions. Efficiently manage orders, track inventory, and enhance customer service on-the-go with our QueueBuster POS." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/assets/outlet-og-img/food-truck.jpg" />
                <meta property="og:url" content="https://queuebuster.co/restaurants/food-truck" />
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
                mobileView ? <MobileFineDine /> : <DesktopFineDine />
            }
        </>
    )
}

export default foodTruck
import React from 'react'
import Loading from "../../components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const DesktopGym = dynamic(() => import('../../components/spa-salon/gym/DesktopGym'), {
    loading: () => <Loading />,
    ssr: false,
});
const MobileGym = dynamic(() => import('../../components/spa-salon/gym/MobileGym'), {
    loading: () => <Loading />,
    ssr: false,
});

const gymPOSBillingSoftware = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>Gym Billing & Gym Management Software in India - Get Free Demo</title>
                <link rel="canonical" href="https://queuebuster.co/restaurants/fine-dine" />
                <link rel="alternate" href="https://queuebuster.co/restaurants/fine-dine" hrefLang='en' />
                <meta name="description" content="Manage your gym efficiently with our billing & management software in India. Request a free demo now for streamlined gym membership management. Call Us" />
                <meta property="og:title" content="Manage Your Gym Efficiently with QueueBuster Billing & Management Software in India" />
                <meta property="og:description" content="Streamline your gym operations with QueueBuster Billing & Management software in India. Simplify tasks, track memberships, and optimize efficiency. Try a free demo! India's No.1 Business Super App." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/gym.jpg" />
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
                mobileView ? <MobileGym /> : <DesktopGym />
            }
        </>
    )
}

export default gymPOSBillingSoftware
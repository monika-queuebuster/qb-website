import React from 'react'
import Loading from "../../components/common/Loading";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobileDigitalPayment = dynamic(() => import('../../components/digitalPayment/MobileDigitalPayment'), {
    loading: () => <Loading />,
    ssr: false,
})
const DesktopDigitalPayment = dynamic(() => import('../../components/digitalPayment/DesktopDigitalPayment'), {
    loading: () => <Loading />,
    ssr: false,
})
const digitalPaymentSoftware = ({ mobileView }) => {
    return (
        <>
            <Head>
                <title>QB Digital Payments - Enabled With Cash, UPI & Credit Cards</title>
                <link rel="canonical" href="https://queuebuster.co/features/digital-payment-software" />
                <link rel="alternate" href="https://queuebuster.co/features/digital-payment-software" hrefLang="en" />
                <meta name="description" content="Seamless transactions with QB Digital Payments! Accept payments effortlessly with cash, UPI, and credit cards. Secure, fast, and convenient solutions for your business needs" />
                <meta property="og:title" content="QB Digital Payments: Accept Cash, UPI, Credit/debit Cards, Wallets and Vouchers Seamlessly!" />
                <meta property="og:description" content="Experience effortless transactions with QB Digital Payments! Accept cash, UPI, credit/debit cards, wallets, and vouchers seamlessly. Secure and convenient payment solutions for your business needs." />
                <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/payment-og+(1).jpg" />
                <meta property="og:url" content="https://queuebuster.co/features/digital-payment-software" />
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
            {mobileView ? <MobileDigitalPayment /> : <DesktopDigitalPayment />}
        </>
    )
}

export default digitalPaymentSoftware
import Head from 'next/head'
import React from 'react'

const help = () => {
  return (
    <>
      <Head>
        <title>Get Help and Support from QueueBuster POS Billing Software</title>
        <meta name="description" content="Need help? Contact QueueBuster POS for top-notch support! Call us at +91 78 61 044 000 for expert assistance today!" />
        <link rel="canonical" href="https://queuebuster.co/help" />
        <link rel="alternate" href="https://queuebuster.co/help" hrefLang="en" />
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
      <iframe src="/assets/pdf/help.pdf" width={"100%"} height={"800px"} ></iframe>
    </>
  )
}

export default help
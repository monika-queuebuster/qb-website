import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicDesktop = dynamic(() =>
  import("../components/homePage/DesktopHomePage")
);

const DynamicMobile = dynamic(() =>
  import("../components/homePage/MobileHomePage")
);

export default function Home({ mobileView }) {
  return (
    <>
      <Head>
        <title>POS Solutions for Small, Medium & Large Businesses</title>
        <meta
          name="description"
          content="QueueBuster is India's leading POS solutions provider, managing Billing, Inventory, Online Dukaan, CRM & Loyalty and many more. With over 65,000+ satisfied merchants makes it India's No.1 Super Business App. "
        />
        <link rel="canonical" href="https://queuebuster.co" />
        <link rel="alternate" href="https://queuebuster.co" hrefLang="en" />
        <meta
          property="og:title"
          content="Most Powerful Point of Sale Solution for Small, Medium & Large Businesses - Get Your Free Demo, Today!"
        />
        <meta
          property="og:description"
          content="QueueBuster is India's leading POS solution streamlining businesses from small shops to large scale enterprises. We offer a comprehensive management of Billing, Inventory, Online Dukaan, CRM & Loyalty and many more."
        />
        <meta
          property="og:image"
          content="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/ALL-IN-ONE_OG.png"
        />
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
      {mobileView ? <DynamicMobile /> : <DynamicDesktop />}
    </>
  );
}

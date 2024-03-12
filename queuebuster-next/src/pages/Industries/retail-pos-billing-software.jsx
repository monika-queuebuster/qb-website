import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const RetailIndustry = dynamic(() => import("../../components/industries/Retail/RetailIndustry"), {
   loading: () => <Loading />,
});

const MobileRetailIndustry = dynamic(
   () => import("../../components/industries/Retail/MobileRetailIndustry"),
   {
      loading: () => <Loading />,
   }
);

const Retail = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>Retail Billing Software for Kirana, Footwear & Cosmetic Stores</title>
            <meta name="description" content="Retail Billing Software for billing, inventory management, vendor management, CRM, and loyalty - an all-in-one solution for small and large businesses." />
            <link rel="canonical" href="https://queuebuster.co/Industries/retail-pos-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/Industries/retail-pos-billing-software" hrefLang="en" />
            <meta property="og:title" content="Fastest Retail POS Billing Software - Retail Shop Management Software - Get Free Demo" />
            <meta property="og:description" content="QueueBuster is an end-to-end retail billing & shop management software. It provides best practices in the business with a simple interface that creates efficiencies in your Billing & Store Management workflows." />
            <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/images-website/Retail_og.jpg" />
            <meta property="og:url" content="https://queuebuster.co/Industries/retail-pos-billing-software" />
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
         {mobileView ? <MobileRetailIndustry /> : <RetailIndustry />}
      </>
   );
};

export default Retail;

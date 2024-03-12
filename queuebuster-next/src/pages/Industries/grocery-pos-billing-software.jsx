import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const GroceryIndustry = dynamic(() => import("../../components/industries/Grocery/GroceryIndustry"),{
   loading: () => <Loading />,
});

const MobileGroceryIndustry = dynamic(
   () => import("../../components/industries/Grocery/mobileGroceryIndustry"),
   {
      loading: () => <Loading />,
   }
);

const Grocery = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>Grocery Billing Software for Supermarkets and Kirana Stores</title>
            <meta name="description" content="Efficient billing software for supermarkets, hypermarkets, and Kirana stores. Streamline grocery transactions seamlessly. Try it today or request a free demo." />
            <link rel="canonical" href="https://queuebuster.co/Industries/grocery-pos-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/Industries/grocery-pos-billing-software" hrefLang="en" />
            <meta property="og:title" content="QueueBuster the easiest Grocery Billing Software for Supermarket, Hypermarket, Kirana, Fruits & Vegetable Stores " />
            <meta property="og:description" content="Queue Buster is an end-to-end Supermarket Billing & Management Software for Multi-Vendor set up. It provides best practices in the business with a simple interface that creates efficiencies in your Billing & Store Management workflows." />
            <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/images-website/og_grocery1.jpg" />
            <meta property="og:url" content="https://queuebuster.co/Industries/grocery-pos-billing-software" />
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
         {mobileView ? <MobileGroceryIndustry /> : <GroceryIndustry />}
      </>
   );
};

export default Grocery;

import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";
import Head from "next/head";

const RestaurantIndustry = dynamic(
   () => import("../../components/industries/Restaurant/RestaurantIndustry"),{
      loading: () => <Loading />,
   }
);

const MobileRestaurantIndustry = dynamic(
   () => import("../../components/industries/Restaurant/MobileRestaurantIndustry"),{
      loading: () => <Loading />,
   }
);

const Restaurant = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>Restaurant Billing Software for Cafe, Fine Dine & Pizzeria</title>
            <meta name="description" content="QueueBuster POS: Elevate your cafe, fine dining, and pizzeria experience with our specialized restaurant billing software. Streamline operations effortlessly." />
            <link rel="canonical" href="https://queuebuster.co/Industries/restaurant-pos-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/Industries/restaurant-pos-billing-software" hrefLang="en" />
            <meta property="og:title" content="QueueBuster Restaurant Management System & Restaurant Billing Software- Get Free Demo" />
            <meta property="og:description" content="Most simplified and cloud-based restaurant POS billing software with features such as order management, KOT, and online order management. Talk to an expert and schedule your free demo." />
            <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/images-website/og-restaurant.jpg" />
            <meta property="og:url" content="https://queuebuster.co/Industries/restaurant-pos-billing-software" />
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
         {mobileView ? <MobileRestaurantIndustry /> : <RestaurantIndustry />}
      </>
   );
};

export default Restaurant;

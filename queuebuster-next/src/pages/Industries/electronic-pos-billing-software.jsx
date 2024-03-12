import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const ElectronicIndustry = dynamic(() => import("../../components/industries/Electronic/ElectronicIndustry"),{
      loading: () => <Loading />,
   }
);

const MobileElectronicIndustry = dynamic(() => import("../../components/industries/Electronic/MobileElectronicIndustry"),{
      loading: () => <Loading />,
   }
);

const Electronic = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>POS Billing Software for Electronics Store & Mobile Shops</title>
            <meta name="description" content="Efficient POS billing software tailored for electronics stores & mobile shops. Simplify transactions, manage inventory, and streamline sales. Get a Free Demo!"
            />
            <link rel="canonical" href="https://queuebuster.co/Industries/electronic-pos-billing-software" />
            <link rel="alternate" href="https://queuebuster.co/Industries/electronic-pos-billing-software" hrefLang="en" />
            <meta property="og:title" content="India's No.1 POS Billing Software for Electical & Electronics Stores - Get a Free Demo" />
            <meta property="og:description" content="Download QueueBuster POS billing software to manage mobile shops, electric shops, electronics showrooms, computer hardware, and home appliances with power packed features like billing, inventory, online dukaan, CRM, loyalty & many more." />
            <meta property="og:image" content="https://quebuster.s3.ap-south-1.amazonaws.com/website/images-website/OG_Electronics+copy+2.jpg" />
            <meta property="og:url" content="https://queuebuster.co/Industries/electronic-pos-billing-software" />
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
         {mobileView ? <MobileElectronicIndustry /> : <ElectronicIndustry />}
      </>
   );
};

export default Electronic;

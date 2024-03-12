// import PricingDesktop from "@/components/pricing/PricingDesktop";
// import PricingMobile from "@/components/pricing/PricingMobile";
import switchStyles from "../styles/desktopMobileSwitch.module.css";
import { getUserCountry } from "@/utils";
import { countryPlanPricing } from "@/services/signUpServices";
import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";
const PricingDesktop = dynamic(() => import("../components/pricing/PricingDesktop"), {
   loading: () => <Loading />,
});

const PricingMobile = dynamic(() => import("../components/pricing/PricingMobile"), {
   loading: () => <Loading />,
});
const PricingEn = ({ mobileView }) => {
   return (
      <>
         <Head>
            <title>POS Pricing: Get a 15-Day Free Trial - Try It Today!</title>
            <meta
               name="description"
               content="Unlock growth opportunities with QueueBuster POS pricing. Explore our plans and start a 15-day free trial. Elevate your business today! Get a Free Demo."
            />
            <link rel="canonical" href="https://queuebuster.co/pricing" />
            <link rel="alternate" href="https://queuebuster.co/pricing" hrefLang="en" />
            <meta
               property="og:title"
               content="QueueBuster POS Pricing- Ready to Take Your Business to the Next Level?"
            />
            <meta
               property="og:description"
               content="Empower your business with QueueBuster's Android-based POS Billing Software. Unlock growth opportunities through our pricing plans, including a 15-day free trial. Elevate your operations today! Request a free demo."
            />
            <meta property="og:url" content="https://queuebuster.co/pricing" />
         </Head>

         {
            mobileView ? <PricingMobile /> : <PricingDesktop />
         }
      </>
   );
};

// export const getServerSideProps = async () => {
//    let finalData;
//    let countryCode = getUserCountry();
//    if (countryCode.code) {
//       let data = {
//          countryCode: countryCode.code,
//       };
//       let result = await countryPlanPricing(data);
//       finalData = { monthly: result.mPlan1, yearly: result.yPlan1 };
//    } else {
//       finalData = { monthly: "999", yearly: "9999" };
//    }
//    return {
//       props: { countryPlan: finalData },
//    };
// };

export default PricingEn;

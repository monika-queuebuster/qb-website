import Loading from "@/components/common/Loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const HelpAndSupportDesktop = dynamic(
   () => import("../components/helpAndSupport/HelpAndSupportDesktop"),
   {
      loading: () => <Loading />,
   }
);

const HelpAndSupportMobile = dynamic(
   () => import("../components/helpAndSupport/HelpAndSupportMobile"),
   {
      loading: () => <Loading />,
   }
);

import { useEffect, useState } from "react";
import switchStyles from "../styles/desktopMobileSwitch.module.css";

const HelpAndSupport = () => {
   return (
      <>
         <Head>
            <title>
               QueueBuster Help & Support: Customer Queries & Complaints, Dial 786 1044 000
            </title>
            <link rel="canonical" href="https://queuebuster.co/help-and-support" />
            <link rel="alternate" href="https://queuebuster.co/help-and-support" hrefLang="en" />
            <meta
               name="description"
               content="QueueBuster POS offers round-the-clock Help & Support for seamless customer experiences. Got queries, complaints, or issues? We're here to fix them. "
            />
            <meta
               property="og:title"
               content="QueueBuster 24X7 Help & Support: Customer Queries & Complaints, Dial 786 1044 000"
            />
            <meta
               property="og:description"
               content="QueueBuster POS offers round-the-clock Help & Support for seamless customer experiences. Got queries, complaints, or issues? We're here to fix them. Discover unbeatable support now!"
            />
            <meta property="og:url" content="https://queuebuster.co/help-and-support" />
         </Head>
         <div className={switchStyles.desktop}>
            <HelpAndSupportDesktop />
         </div>
         <div className={switchStyles.mobile}>
            <HelpAndSupportMobile />
         </div>
      </>
   );
};

export default HelpAndSupport;

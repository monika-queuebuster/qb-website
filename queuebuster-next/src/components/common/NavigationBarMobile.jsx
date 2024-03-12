import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/common/NavigationBarMobile.module.css";
import HamburgerMobile from "./HamburgerMobile";
import { Toaster } from "sonner";
import Image from "next/image";
import { useRouter } from "next/router";


const NavigationBarMobile = ({ showHamburger, setShowHamburger }) => {

   const router = useRouter();
   const handleHumburger = () => {
      setShowHamburger(!showHamburger)
   }

   return (
      <div style={{ position: "relative" }}>
         <Toaster
            position="bottom-center"
            richColors
            toastOptions={{
               style: { width: "92%" },
               className: "my-toast",
               descriptionClassName: "my-toast-description",
            }}
         />
         <nav className={styles.nav}>
            {
               !router.asPath.includes("/gdnv3") &&
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  onClick={handleHumburger}
                  //    class="w-6 h-6"
                  style={{
                     height: "4rem",
                     width: "4rem",
                     position: "absolute",
                     color: "#2A6AB4",
                     top: "1.5rem",
                     bottom: "1.5rem",
                     left: "1rem",
                  }}
               >
                  {showHamburger ? (
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                     />
                  )}
               </svg>
            }
            <center className={styles.nav_logos}>
               <Link href="/">
                  <div className={styles.qbLogo}><Image src="/assets/logo.svg" alt='queuebuster logo' fill /></div>
               </Link>
            </center>

            <a href="tel:+917876180180"><div className={styles.call_icon}><Image src="/assets/InterfaceIcon.svg" alt='call icon for mobile' fill /></div></a>

         </nav>
         {showHamburger ? <HamburgerMobile setShowHamburger={setShowHamburger} /> : null}
      </div>
   );
};

export default NavigationBarMobile;

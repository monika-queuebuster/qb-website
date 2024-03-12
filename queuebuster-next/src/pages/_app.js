import Footer from "@/components/common/Footer";
import {
  NavigationBar,
  NavigationBarOnlyLogo,
} from "@/components/common/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/qbStrap.module.css";
import { FooterBtns, GdnvFooterBtn } from "@/components/mobileQbStrap";
import { HelpBtn } from "@/components/qbStrap";
import { BuisnessTypeContext } from "@/services/BuisnessTypeContext";
import ISOCertification from "@/components/modals/ISOCertification";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mobileView, setmobileView] = useState(1);
  const [footerBtns, setFooterBtns] = useState(false);
  const [showHamburger, setShowHamburger] = useState(0);
  const [showCertification, setShowCertification] = useState(false);
  const [planSelected, setPlanSelected] = useState("");

  const setWindowDimensions = () => {
    window.innerWidth > 600 ? setmobileView(0) : setmobileView(1);
  };

  useEffect(() => {
    setWindowDimensions();
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    if (
      Object.keys(router?.query).length > 0 &&
      router.pathname === "/plan-checkout/[id]"
    ) {
      const queryValue = router?.query;
      setPlanSelected(queryValue?.id);
      if (Object.keys(router?.query).includes("id")) {
        delete queryValue.id;
      }
    }
    if (Object.keys(router?.query).length > 0) {
      localStorage.setItem("sources", JSON.stringify(router?.query));
    }
  }, [router?.query]);

  // to check y scroll positon and set footer btns
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 700 ? setFooterBtns(true) : setFooterBtns(false);
    });
  }, []);

  return (
    <>
      <Head>
        {/* <title>QueueBuster™ All-in-One POS - India's Business Super App!</title> */}
        <meta property="og:type" content="website" />
        {router.asPath !== "/facebook-lead-gen" ||
          router.asPath !== "/gdnv3/grocery" ||
          router.asPath !== "/gdnv3/retail" ||
          (router.asPath !== "/gdnv3/restaurants" && (
            <>
              <meta name="robots" content="index, follow" />
              <meta name="slurp" content="index, follow, archive" />
            </>
          ))}
        <meta name="robots" content="NOODP" />
        <meta name="geo.region" content="IN" />
        <meta name="allow-search" content="yes" />
        <meta name="revisit-after" content="daily" />
        <meta name="distribution" content="global" />
        <meta name="expires" content="never" />
        <link defer rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          defer
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          defer
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {(() => {
        switch (router.asPath) {
          case "/get-free-demo":
            return (
              <NavigationBarOnlyLogo
                showHamburger={showHamburger}
                setShowHamburger={setShowHamburger}
              />
            );
          case "/facebook-lead-gen":
            return (
              <NavigationBarOnlyLogo
                showHamburger={showHamburger}
                setShowHamburger={setShowHamburger}
              />
            );
          case "/help":
            return null;
          default:
            return (
              <NavigationBar
                showHamburger={showHamburger}
                setShowHamburger={setShowHamburger}
              />
            );
        }
      })()}

      <div
        className={styles.backGroundGardient}
        loading="lazy"
        style={{
          paddingTop:
            router.asPath === "/help" ? "0" : !mobileView ? "8rem" : "7.2rem",
        }}
      >
        <ISOCertification
          isOpen={showCertification}
          closeModal={() => setShowCertification(false)}
        />
        <BuisnessTypeContext>
          <Component
            {...pageProps}
            mobileView={mobileView}
            planSelected={planSelected}
          />
        </BuisnessTypeContext>
        {footerBtns &&
        mobileView &&
        !showHamburger &&
        router.asPath != "/get-free-demo" &&
        router.asPath != "/enterprise-pos-solution" &&
        router.asPath != "/contact-sales" &&
        !router.asPath.includes("/gdnv3") ? (
          <FooterBtns />
        ) : router.asPath.includes("/gdnv3") &&
          footerBtns &&
          mobileView &&
          !showHamburger ? (
          <GdnvFooterBtn />
        ) : null}

        {!mobileView && <HelpBtn mobileView={mobileView} />}

        {(() => {
          switch (router.asPath) {
            case "/sign-up":
              return null;
            case "/get-free-demo":
              return null;
            case "/help":
              return null;
            case "/gdnv3/retail":
              return null;
            case "/gdnv3/restaurants":
              return null;
            case "/gdnv3/grocery":
              return null;
            case "/facebook-lead-gen":
              return null;
            default:
              return (
                <Footer
                  showCertification={showCertification}
                  setShowCertification={setShowCertification}
                />
              );
          }
        })()}
      </div>
    </>
  );
}

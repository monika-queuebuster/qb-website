import styles from "../../styles/common/NavigationBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { inter_Bold, inter_Regular } from "./Fonts";
import { BlackCustomButton, CustomButton, TransparentCustomButton } from "../qbStrap";
import NavigationBarMobile from "./NavigationBarMobile";
import { useEffect, useState } from "react";
import Head from "next/head";
import switchStyles from "../../styles/desktopMobileSwitch.module.css";
import content from "../../language/ENGLISH.json";
import { useRouter } from "next/router";
import { Toaster } from "sonner";
import { industries, features, company } from "../../constants/navigation.json";
import VerificationPopup from "../modals/VerificationPopup";


export const NavigationBar = ({ showHamburger, setShowHamburger }) => {
   const [showIndustryTypes, setShowIndustryTypes] = useState(false);
   const [showFeatures, setShowFeatures] = useState(false);
   const [showCompany, setShowCompany] = useState(false);
   const [demoModal, setDemoModal] = useState(false);
   const [changeCTA, setChangeCTA] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!");
   const [outletDesc, setOutletDesc] = useState({ status: false, industry: "", index: 0 });

   const router = useRouter();

   const handleClick = () => {
      const ourKeyFeatureElement = document.getElementById("ourKeyFeature");
      if (router.asPath == "/" && ourKeyFeatureElement) {
         ourKeyFeatureElement.scrollIntoView({ behavior: "smooth" });
      } else {
         router.push("/").then(() => {
            const ourKeyFeatureElement2 = document.getElementById("ourKeyFeature2");
            ourKeyFeatureElement2 && ourKeyFeatureElement2.scrollIntoView({ behavior: "smooth" });
         });
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", () => {
         window.scrollY > 600 ? setChangeCTA(true) : setChangeCTA(false);
      });
   }, []);

   return (
      <>
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
         <div className={switchStyles.desktop}>
            <div className={styles.container}>
               <Toaster position="bottom-right" richColors />
               <nav className={styles.nav} onMouseLeave={() => (setShowIndustryTypes(false), setShowFeatures(false), setShowCompany(false))}>
                  <div onMouseOver={() => (setShowIndustryTypes(false))}>
                     <Link href="/">
                        <div className={styles.qbLogo} ><Image src="/assets/logo.svg" alt="queuebuster logo" fill /></div>
                     </Link>
                  </div>

                  {/* mid part */}
                  {
                     !router.asPath.includes("/gdnv3") &&
                     <div className={styles.header_mid_part}>
                        <div className={styles.header_mid_links}>
                           <div
                              className={`${styles.mid_link}`}
                              style={{ padding: "0 1.898rem 0rem 1.314rem" }}
                              onMouseOver={() => (setShowIndustryTypes(true), setShowFeatures(false), setShowCompany(false))}
                           >
                              <p style={{ margin: '0' }}>Industry Types</p>
                              {
                                 showIndustryTypes &&
                                 <div className={styles.industry_menu} onMouseOver={() => setShowIndustryTypes(true)}>
                                    {
                                       industries?.map((ele) => {
                                          return (
                                             <>
                                                <div key={ele?.id} onClick={() => setShowIndustryTypes(false)} >
                                                   <div className={`${styles.industry_menu_type}  ${ele?.styleId}`} onClick={()=> router.push(ele?.link)}>
                                                      <div className={styles.industry_img_container}><Image src={ele?.industryLogo} alt={ele?.altText} fill /></div>
                                                      <div>
                                                         <h4>{ele?.name}</h4>
                                                         <p>{ele?.desc}</p>
                                                      </div>
                                                   </div>
                                                   <ul className={styles.industry_outlet_container}>
                                                      {
                                                         ele?.outlets?.map((item, idx) => {
                                                            return (
                                                               <li key={item?.title}
                                                                  onClick={() => router.push(item?.url)}
                                                                  onMouseOver={() => setOutletDesc({ industry: ele?.name, index: idx, status: true })}
                                                                  onMouseLeave={() => setOutletDesc({ industry: "", index: 0, status: false })}
                                                               >
                                                                  {item?.title}
                                                                  
                                                               </li>
                                                            )
                                                         })
                                                      }
                                                   </ul>
                                                </div>
                                             </>
                                          )
                                       })
                                    }
                                 </div>
                              }
                           </div>
                           <div
                              className={`${styles.mid_link}`}
                              style={{ padding: "0 1.898rem 0rem 1.314rem" }}
                              onMouseOver={() => (setShowIndustryTypes(false), setShowFeatures(true), setShowCompany(false))}
                           >
                              <p
                                 style={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    margin: "0",
                                 }}
                                 onClick={() => {
                                    handleClick();
                                 }}
                              >
                                 Features
                              </p>
                              {
                                 showFeatures &&
                                 <div className={styles.features_menu} onMouseOver={() => setShowFeatures(true)}>
                                    {
                                       features?.map((ele) => {
                                          return (
                                             <div key={ele?.id} className={`${styles.industry_menu_type} ${ele?.hoverCLass}`} onClick={() => (router.push(ele?.link), setShowFeatures(false))} >
                                                <div className={styles.industry_img_container}><Image src={ele?.featuresLogo} alt={ele?.altText} fill /></div>
                                                <div className={styles.menu_content}>
                                                   <h4>{ele?.name}</h4>
                                                   <p>{ele?.desc}</p>
                                                </div>
                                             </div>
                                          )
                                       })
                                    }
                                 </div>
                              }
                           </div>
                           <Link href={"/pricing"} style={{ textDecoration: "none" }} onMouseOver={() => (setShowIndustryTypes(false), setShowFeatures(false), setShowCompany(false))}>
                              <div
                                 className={styles.mid_link}
                                 style={{ padding: "0 1.898rem 0rem 1.314rem" }}
                                 onMouseOver={() => (setShowIndustryTypes(false), setShowFeatures(false))}
                              >
                                 Pricing
                              </div>
                           </Link>

                           <Link href={"/enterprise-pos-solution"} style={{ textDecoration: "none" }} onMouseOver={() => (setShowIndustryTypes(false), setShowFeatures(false), setShowCompany(false))}>
                              <div
                                 className={styles.mid_link}
                                 style={{ padding: "0 1.898rem 0rem 1.314rem" }}
                                 onMouseOver={() => (setShowIndustryTypes(false), setShowFeatures(false))}
                              >
                                 Enterprise
                              </div>
                           </Link>

                           <div
                              className={`${styles.mid_link}`}
                              style={{ padding: "0 1.898rem 0rem 1.314rem" }}
                              onMouseOver={() => (setShowIndustryTypes(false), setShowCompany(true), setShowFeatures(false))}
                           >
                              <p
                                 style={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    margin: "0",
                                 }}
                                 onClick={() => {
                                    handleClick();
                                 }}
                              >
                                 Company
                              </p>
                              {
                                 showCompany &&
                                 <div className={styles.contact_menu} onMouseOver={() => (setShowCompany(true))}>
                                    {
                                       company?.map((ele) => {
                                          return (
                                             <div key={ele?.id} className={`${styles.industry_menu_type} ${ele?.hoverClass}`} onClick={() => (router.push(ele?.link), setShowCompany(false))}>
                                                <div style={{ height: ele?.height, width: ele?.width, position: "relative" }} ><Image src={ele?.companyIcon} alt={ele?.altText} fill /></div>
                                                <div>
                                                   <h4>{ele?.name}</h4>
                                                   <p>{ele?.desc}</p>
                                                </div>
                                             </div>
                                          )
                                       })
                                    }
                                 </div>
                              }
                           </div>
                        </div>
                     </div>
                  }

                  {/* right part */}
                  <div className={styles.headerRight}>
                     <div className={styles.contact_option}>
                        <div style={{ height: "1.5rem", width: "1.5rem", position: 'relative' }}><Image src='/assets/navPhone.svg' alt='call icon' fill /></div>
                        <span><a href="tel:+91 78 76 180 180">+91 78 76 180 180</a></span>
                        <span className={styles.tooltip}>Only for demo and sales enquiries</span>
                     </div>
                     {
                        !router.asPath.includes("/gdnv3") &&
                        <TransparentCustomButton
                           text={"Login"}
                           style={{ padding: "0 2rem", height: "3.8rem" }}
                           onClick={() => router.push("https://manage.queuebuster.co")} />
                     }

                     {
                        router.asPath != '/enterprise-pos-solution' &&
                        router.asPath != '/contact-sales' &&
                        changeCTA &&
                        <BlackCustomButton
                           text={
                              changeCTA && "Try It Free"}
                           style={{ padding: "0 2rem", height: "3.8rem" }}
                           onClick={() => (setDemoModal(true), setHeading("30 Days free trial"))}
                        />
                     }
                  </div>
               </nav>
            </div>
         </div>

         <div className={switchStyles.mobile}>
            <NavigationBarMobile showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
         </div>
      </>
   );
};

const NavigationPopUp = (props) => {
   const [selectedImage, setSelectedImage] = useState(
      props.options.length ? props.options[0]["img"] : ""
   );
   const [firstOptionBoldness, setFirstOptionBoldness] = useState(false);
   useEffect(() => {
      setSelectedImage(props.options.length ? props.options[0]["img"] : "");
      setFirstOptionBoldness(true);
   }, [props.popUp]);
   return (
      <div
         style={{
            display: props.popUp ? "flex" : "none",
            background: "#fff",
            position: "absolute",
            width: props.width,
            height: "22.1rem",
            borderBottomRightRadius: "1.1rem",
         }}
      >
         {selectedImage ? (
            <div
               style={{
                  width: "21.9rem",
                  height: "21.9rem",
                  position: "absolute",
                  top: "0%",
                  right: "100%",
                  display: "flex",
                  justifyContent: "end",
                  // background: "#fff",
               }}
            >
               <img
                  height={"100%"}
                  width={"auto"}
                  src={selectedImage}
                  style={{ borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px" }}
                  alt="HeroImage"
               />
            </div>
         ) : null}
         <div
            style={{
               width: "100%",
               padding: "1.46rem 1.898rem 0rem 1.314rem",
            }}
         >
            {props.options &&
               props.options.map((el, idx) => {
                  return (
                     <Link
                        href={el.navigate}
                        onMouseEnter={() => {
                           setSelectedImage(el.img);
                           if (idx != 0) setFirstOptionBoldness(false);
                        }}
                        onMouseLeave={() => {
                           setSelectedImage("");
                        }}
                        className={styles.navoptions}
                        style={
                           idx == 0
                              ? {
                                 fontWeight: firstOptionBoldness ? "600" : "",
                                 color: firstOptionBoldness ? "black" : "",
                              }
                              : {}
                        }
                        key={idx}
                     >
                        {el.text}
                     </Link>
                  );
               })}
         </div>
      </div>
   );
};

export const NavigationBarOnlyLogo = ({ showHamburger, setShowHamburger }) => {
   return (
      <>
         <div className={switchStyles.desktop}>
            <div className={styles.container}>
               <Toaster position="bottom-right" richColors />
               <nav className={styles.nav2}>
                  <div>
                     <Link href="/">
                        <div className={styles.qbLogo} ><Image src="/assets/logo.svg" alt="queuebuster logo" fill /></div>
                     </Link>
                  </div>
               </nav>
            </div>
         </div>
         <div className={switchStyles.mobile}>
            <NavigationBarMobile showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
         </div>
      </>
   );
};

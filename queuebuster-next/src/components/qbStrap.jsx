import styles from "../styles/qbStrap.module.css";
import styles1 from "../styles/common/FAQstyle.module.css";
import homePageStyle from "../styles/common/NewHomePage.module.css";
import React, { useContext, useRef, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Label, Table } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import {
   Button,
   Card,
   Form,
   FormFeedback,
   FormGroup,
   Input,
   Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
} from "reactstrap";
import { Container, Row, Col, CardBody, CardTitle, CardText } from "reactstrap";
import {
   inter_Bold,
   inter_Medium,
   inter_Regular,
   inter_Minimum,
   inter_semi_bold,
   inter_Mediumup,
} from "./common/Fonts";
import Marquee from "react-fast-marquee";
import { Fragment, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import Select from "react-select";
import content from "../language/ENGLISH.json";
import { useRouter } from "next/router";
import { useBusinessContext } from "@/services/BuisnessTypeContext";
import { employeeReviews } from "@/constants/common";
const a = "../../public/assets/Brands/heineken.webp";


const CustomButton = (props) => {
   return (
      <div>
         <Button
            className={inter_Bold.className}
            style={{
               backgroundColor: props.styles?.backgroundColor
                  ? props.styles?.backgroundColor
                  : "transparent",
               border: props.styles?.border ? props.styles?.border : "2px solid #204F98",
               color: props.styles?.color
                  ? props.styles.color
                  : props.styles?.backgroundColor
                     ? "#FFFFFF"
                     : "#204F98",
               height: props.styles?.height ? props.styles.height : "4.5rem",
               width: props.styles?.width ? props.styles.width : "15rem",
               fontSize: props.styles?.fontSize ? props.styles.fontSize : "1.5rem",
               fontWeight: props.styles?.fontWeight ? props.styles.fontWeight : 600,
               ...props.styles,
            }}
            onClick={(e) => {
               props.onClick ? props.onClick(e) : "";
            }}
         >
            {props.text}
         </Button>
      </div>
   );
};

const MarqueeComponent = (props) => {
   const { commonMarqueTitle } = content;
   const { trustedBy, merchantsCount } = content.qbStrap
   return (
      <div style={{ margin: props.margin ? props.margin : "0" }}>
         {props.header ? (
            <>
               {typeof props.header === "boolean" ? (
                  <></>
               ) : (
                  <p
                     className={`${inter_Bold.className} ${styles.marqueeLine}`}
                     style={props.paraStyle ? props.paraStyle : {}}
                  >
                     {props.header}
                  </p>
               )}
            </>
         ) : (
            <p
               className={`${inter_Bold.className} ${styles.marqueeLine}`}
               style={props.paraStyle ? props.paraStyle : {}}
            >
               {props.lineBreak ? (
                  <>
                     {trustedBy} <br /> {merchantsCount}
                  </>
               ) : (
                  commonMarqueTitle
               )}
            </p>
         )}

         <Marquee
            gradient={false}
            pauseOnHover="true"
            direction={props.direction ? props.direction : "right"}
            className={styles.mainMarqueeTag}
            style={{ ...props.marqueeStyle }}
         >
            {props?.ClientsArr?.map((item) => {
               return (
                  <div key={item?.altText} className={styles.marqueeHomePage} style={{ ...props.marqueeContStyle }}>
                     <div style={{ ...props.marqueeImageStyle, height: item?.height, width: item?.width }} className={styles.clients_image_container}>
                        <Image src={item?.imgSrc} alt={item?.altText} draggable={false} fill />
                     </div>
                  </div>
               );
            })}
         </Marquee>
      </div>
   );
};

const OutletTypes = (props) => {
   const { homePageOutLetType } = content
   return (
      <div>
         <h3 className={`${inter_Bold.className} ${styles.outletTypesHeading}`}>{homePageOutLetType}</h3>
         <div style={{}} className={styles.outletTypesimgContainer}>
            {props?.images?.map((item) => {
               return (
                  <center style={{ paddingBottom: "3rem" }}>
                     <div style={{ width: '22rem', height: '15rem', position: 'relative' }}>
                        <Image src={item.content} alt={item?.altText} className={styles.outletTypesimgs} fill />
                     </div>
                     <p className={styles.outletTypesText}>{item.title}</p>
                  </center>
               );
            })}
         </div>
      </div>
   );
};

const FAQCard = (props) => {
   const [open, setOpen] = useState("");
   const { FaqTableData } = props;
   // console.log("--props faq--", props.FaqTableData.length)

   const { commonViewAllQuestion } = content;
   const [desiredLength, setDesiredLength] = useState(4);

   const toggle = (id) => {
      if (open === id) {
         setOpen();
      } else {
         setOpen(id);
      }
   };
   const handleArrLength = () => {
      document.getElementById("faqMobile").scrollIntoView({ behavior: "smooth" });
      if (desiredLength == 4) {
         setDesiredLength(FaqTableData.length);
      } else {
         setDesiredLength(4);
      }
   };

   return (
      <>
         <div
            id="faqMobile"
            style={{
               scrollMarginTop: "18rem",
               width: "70%",
            }}
         >
            <div className={`${styles1.container} mt-5`}>
               {FaqTableData?.slice(0, desiredLength)?.map((el, index) => {
                  return (
                     <>
                        <div key={el.id} className={styles1.accContainer}>
                           <Accordion flush={true} open={open} toggle={toggle}>
                              <AccordionItem style={{ background: 'transparent !important' }}>
                                 <AccordionHeader targetId={index} className={styles1.accHeader}>
                                    {el.para}
                                 </AccordionHeader>
                                 <AccordionBody
                                    accordionId={index}
                                    className={styles1.acctoggle}
                                 >
                                    <div dangerouslySetInnerHTML={{ __html: el.des }}></div>
                                 </AccordionBody>
                              </AccordionItem>
                           </Accordion>
                           <hr style={{ border: "0.1rem solid #c3c0c0" }} />
                        </div>
                     </>
                  );
               })}
            </div>
         </div>
         <h5
            style={{
               color: "#2A6AB4",
               font: "normal normal bold 1.6rem/2.4rem Inter",
               cursor: "pointer",
            }}
            onClick={handleArrLength}
         >
            {desiredLength == FaqTableData?.length && FaqTableData?.length < 6 ? "View Less" : FaqTableData?.length < 6 ? null : commonViewAllQuestion}
         </h5>
      </>
   );
};

const RecentPost = (props) => {
   const { recentPost, viewBlogs } = content.qbStrap;
   const { commonReadMore } = content;
   return (
      <>
         <div className={styles.recentPostContainer_HomePage}>
            <h3
               style={{
                  font: "normal normal 700 2.6rem/2.2rem Inter",
                  color: "#343434",
                  margin: "0 0 2rem 0 ",
               }}
            >
               {recentPost}
            </h3>
            <div>
               {props.recentPostList.map((el) => {
                  return (
                     <div className={styles.recentPostListContainer_HomePage}>
                        <h6>{el.title}</h6>
                        <p
                           style={{
                              font: "normal normal 600 1.2rem/1.5rem Inter",
                              color: "#2A6AB4",
                              margin: "1rem 0 0 0",
                           }}
                        >
                           {commonReadMore}
                        </p>

                        <hr />
                     </div>
                  );
               })}
            </div>
            <p
               style={{
                  font: "normal normal 600 1.5rem/3rem Inter",
                  color: "#2A6AB4",
                  margin: "2rem 0 1rem 0",
               }}
            >
               {viewBlogs}
            </p>
         </div>
      </>
   );
};

const OurKeyFeatures = (props) => {
   const { homePageOurKeyFeaturesTitle, commonKnowMore } = content;
   const [image, setImage] = useState("");
   const [centerImgHt, setCenterImgHt] = useState('38rem');
   const [centerImgWt, setCenterImgWt] = useState('38rem');
   const [state, setState] = useState({ arr1: [], arr2: [] });
   let leftArr = [],
      rightArr = [];
   props.arr?.map((el, idx) => {
      if (idx <= 2) {
         leftArr.push(el);
      } else if (idx <= 5) {
         rightArr.push(el);
      }
   });
   const handleImgae = (url, id, elHeight, elWidth) => {
      if (url.length > 0) {
         setImage(url);
         setCenterImgHt(elHeight);
         setCenterImgWt(elWidth)
      }
      leftArr = leftArr.map((el) => {
         if (el?.id == id) {
            el.isSelected = true;
         } else {
            el.isSelected = false;
         }
         return el;
      });
      rightArr = rightArr.map((elem) => {
         if (elem?.id == id) {
            elem.isSelected = true;
         } else {
            elem.isSelected = false;
         }
         return elem;
      });
      setState({ ...state, arr1: leftArr, arr2: rightArr });
   };
   useEffect(() => {
      (leftArr = []), (rightArr = []);
      props.arr?.map((el, idx) => {
         if (el.isSelected) {
            setImage(el.url);
         }
         if (idx <= 2) {
            leftArr.push(el);
         } else if (idx <= 5) {
            rightArr.push(el);
         }
      });
      setState({ ...state, arr1: leftArr, arr2: rightArr });
   }, []);
   return (
      <div>
         <h3 className={`${inter_Bold.className} ${styles.keyFeatureHeading}`}>
            {homePageOurKeyFeaturesTitle}
         </h3>
         <div className={styles.keyFeaturesContainer}>
            <div className={styles.keyFeaturesDiv1}>
               {state.arr1.map((el) => (
                  <div className={styles.featuresInfoDiv}>
                     <div>
                        <div className={styles.featuresLogo} style={{ border: el.isSelected ? "2px solid black" : null, }}>
                           <Image
                              src={el.logo}
                              alt={el?.altText}
                              onClick={() => handleImgae(el?.url, el?.id, el?.imgHeight, el?.imgWidth)}
                              draggable={false}
                              fill
                           />
                        </div>
                     </div>
                     <div>
                        <p className={`${inter_Bold.className} ${styles.billHeading}`}>
                           {el.heading}
                        </p>
                        <p className={`${inter_Regular.className} ${styles.billdescription}`}>
                           {el.text}
                        </p>
                        <p className={`${inter_Bold.className} ${styles.knowMore}`}>
                        </p>
                     </div>
                  </div>
               ))}
            </div>
            <div key={image} className={styles.keyFeaturesDiv2}>
               <div style={{ height: centerImgHt, width: centerImgWt, position: 'relative' }} >
                  <Image src={image} alt="feature related image" key={Math.round()} fill />
               </div>
            </div>
            <div className={styles.keyFeaturesDiv3}>
               {state.arr2.map((el) => (
                  <div className={styles.featuresInfoDiv}>
                     <div>
                        <div className={styles.featuresLogo} style={{ border: el.isSelected ? "2px solid black" : null, }}>
                           <Image
                              src={el.logo}
                              alt={el?.altText}
                              onClick={() => handleImgae(el.url, el.id, el?.imgHeight, el?.imgWidth)}
                              draggable={false}
                              fill
                           />
                        </div>
                     </div>
                     <div>
                        <p
                           className={`${inter_Bold.className} ${styles.billHeading}`}
                           style={el.text?.length > 0 ? {} : { paddingTop: "1.8rem" }}
                        >
                           {el.heading}
                        </p>
                        <p className={`${inter_Regular.className} ${styles.billdescription}`}>
                           {el.text}
                        </p>
                        <p className={`${inter_Bold.className} ${styles.knowMore}`}>
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

const GiveItTry = (props) => {
   const router = useRouter();
   const { contatcSales } = content;
   const { businessType, setBusinessType } = useBusinessContext();
   return (
      <div>
         <div>
            <div
               className={styles.GiveItTry}
               style={props.containerStyles ? { ...props.containerStyles } : {}}
            >
               <div style={{ margin: "auto 5rem" }}>
                  <h4 className={`${styles.giveItTryHeading}`}>
                     {props.heading} <br /> {props?.heading2}
                  </h4>
                  <p className={styles.giveItTryDesc}>{props.description}</p>
                  <div style={{ display: "flex", gap: "2rem" }}>
                     <BlackCustomButton text={props?.btnText ? props?.btnText : contatcSales} style={{ padding: "0 2rem" }}
                        onClick={(e) => {
                           setBusinessType(props?.usedIn);
                           router.push(props?.redirectionLink ? props?.redirectionLink : `/contact-sales`);
                        }}
                     />

                     {props?.usedIn === 'pricing' &&
                        <CustomButton
                           text="Get Free Demo"
                           styles={{
                              backgroundColor: "#000D4B",
                              fontSize: "1.31rem",
                              color: "#FFFFFF",
                              height: "4.5rem",
                              width: "14.6rem",
                              marginTop: "2rem",
                              fontWeight: "600",
                              border: `0.1rem solid #000D4B`,
                           }}
                           onClick={() => router.push("/get-free-demo")}
                        />
                     }
                  </div>
               </div>
               <div
                  className={`${props?.usedIn === 'home' ? styles.give_it_try_home
                     : props?.usedIn === 'electronics' ? styles.give_it_try_electronic
                        : props?.usedIn === 'grocery' ? styles.give_it_try_grocery
                           : props?.usedIn === 'contactUs' ? styles.give_it_contactUs
                              : styles.give_it_try_image}`}
                  style={{
                     position: "absolute",
                     right: props.styles?.right && props.styles.right,
                     bottom: props.styles?.bottom && props.styles.bottom,
                     width: props.styles?.width && props.styles.width,
                     height: props.styles?.height && props.styles?.height
                  }}
               >
                  <Image src={props.image} alt="give it a try" fill />
               </div>
            </div>
         </div>
      </div>
   );
};

const Iframe = (props) => {
   return (
      <div className={styles.iframeContainer} style={props?.iframeMargin && { margin: props?.iframeMargin }}>
         <h3
            className={`${inter_Bold.className} ${styles.iframeHeading}`}
            style={{ ...props.titleStyle }}
         >
            {props.title}
         </h3>
         <p
            className={`${inter_Regular.className} ${styles.iframedescription}`}
            style={{ width: props.desWidth ? props.desWidth : "", ...props.descStyle }}
         >
            {props.description}
         </p>
         <center>
            <iframe
               loading="lazy"
               className={styles.iframe}
               style={{
                  width: props.iframeWidth ? props.iframeWidth : "",
                  height: props.iframeHeight ? props.iframeHeight : "",
                  margin: props?.iframeMargin && props?.iframeMargin,
                  padding: props?.iframePadding && props?.iframePadding
               }}
               src={`${props.videoUrl}?rel=0`}
               title="YouTube video player"
               frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowfullscreen
            ></iframe>
         </center>
      </div>
   );
};

const Tabs = (props) => {
   const { data, color, labelPadding, labelFontSize, labelStyle, tabContainerStyle } = props;
   const [activeTabs, setActiveTabs] = useState(0);

   const handleTabClick = (tabIndex) => {
      setActiveTabs(tabIndex);
   };

   return (
      <>
         <div style={props.position != "top" ? { display: "none" } : { display: "block" }}>
            {data && data[activeTabs]?.content}
         </div>
         <div className={styles.tabMainContainer} style={{ ...props.style }}>
            <div className={styles.tabContainer} style={{ ...tabContainerStyle }}>
               {data &&
                  data.map((el, idx) => (
                     <div
                        key={idx}
                        className={`${styles.tab} ${activeTabs === idx ? "active" : ""}${idx == activeTabs ? inter_Bold.className : inter_Regular.className
                           }`}
                        onClick={() => handleTabClick(idx)}
                        style={{
                           fontSize: labelFontSize ? labelFontSize : "1.8rem",
                           font: 'font: normal normal normal 1.8rem/3rem Inter',
                           color: idx == activeTabs ? color : "#5A5A5A",
                           padding: labelPadding && labelPadding,
                           ...labelStyle,
                        }}
                     >
                        {el.heading}
                     </div>
                  ))}
               <div
                  className={styles.slider}
                  style={{
                     left: `${activeTabs * (100 / data.length)}%`,
                     width: `${100 / data.length}%`,
                     backgroundColor: `${color}`,
                     borderRadius: "1rem",
                  }}
               ></div>
            </div>
         </div>
         <div style={props.position == "top" ? { display: "none" } : { display: "block" }}>
            {data && data[activeTabs]?.content}
         </div>
      </>
   );
};

const IndustryWiseCard = (props) => {
   const { homePageBusinessTypeColorDes, homePageRetailDes, commonKnowMore } = content;
   const containerRef = useRef(null);
   const router = useRouter();
   const handleClickScroll = (ID) => {
      const element = document.getElementById(ID);
      console.log(element, "this is element");
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };
   let keyFeatures = [
      {
         heading: "Inventory management",
         content: "Record and manage your inventory across all locations in one place.",
      },
      { heading: "Billing", content: "Process quick payments with access to integrations" },
      { heading: "eStore", content: "Create your e-store & start selling online in seconds" },
      { heading: "CRM & Loyalty", content: "A suit of CRM Tools to make your customers love you" },
      { heading: "Integration", content: "A suit of CRM Tools to make your customers love you" },
   ];
   let outLetType = [
      {
         heading: "Inventory management",
         content: "Record and manage your inventory across all locations in one place.",
      },
      { heading: "Billing", content: "Process quick payments with access to integrations" },
      { heading: "eStore", content: "Create your e-store & start selling online in seconds" },
      { heading: "CRM & Loyalty", content: "A suit of CRM Tools to make your customers love you" },
      { heading: "Integration", content: "A suit of CRM Tools to make your customers love you" },
   ];
   let contentOne = (
      <div
         className={styles.keyFeaturesBox}
         // onScroll={() => handleScroll()}
         ref={containerRef}
      >
         {props.keyFeatures &&
            props.keyFeatures.map((el, idx) => {
               return (
                  <div>
                     <p className={inter_Bold.className}>{el.heading} </p>
                     <p className={inter_Regular.className}>{el.content}</p>
                  </div>
               );
            })}
      </div>
   );

   let contentTwo = (
      <div className={styles.keyFeaturesBox}>
         {props.outLetType &&
            props.outLetType.map((el, idx) => {
               return (
                  <div>
                     <p className={inter_Bold.className}>{el.heading}</p>
                     <p className={inter_Regular.className}>{el.content}</p>
                  </div>
               );
            })}
      </div>
   );
   const data = [
      {
         heading: "Key Features",
         content: contentOne,
      },
      {
         heading: "Outlet Types",
         content: contentTwo,
      },
   ];
   const industryArr = [
      { name: "Retail", color: "#B54E3D" },
      { name: "Restaurants", color: "#D90429" },
      { name: "Grocery", color: "#7E9F3C" },
      { name: "Spa & Salon", color: "#7678ED" },
      { name: "Electronics", color: "#204F98" },
   ];
   const id = props.industry.split(" ")[0];
   return (
      <div id={id} className={styles.mainBoxIndustry}>
         <div>
            <div
               style={{
                  background: props?.color ? props.color : "#B54E3D",
                  visibility: props.industry == "Business Types" ? "hidden" : "visible",
               }}
            >
               <p className={inter_Medium.className}>
                  {props?.industry ? props.industry.substring(0, props.industry.length - 3).toUpperCase() : "RETAIL"}
               </p>
            </div>
            <div className={styles.contentGridBox}>
               <div>
                  <div>
                     <CustomButton
                        text={
                           props?.logoText ? props.logoText : homePageBusinessTypeColorDes
                        }
                        styles={{
                           backgroundColor: props?.color ? props.color : "#B54E3D",
                           border: "none",
                           borderRadius: "6px",
                           padding: "0.2rem 2rem",
                           marginBottom: "1.27rem",
                           width: "max-content",
                           height: "max-content",
                           padding: "0.2rem 2rem",
                           fontWeight: "300",
                           color: props.industry == "Business Types" ? "black" : "#ffff",
                        }}
                        onClick={(e) => {
                           console.log(e);
                        }}
                     />

                     <h4 className={`${inter_Bold.className} ${styles.industryBoxTitle}`}>
                        {props?.subHeading
                           ? props?.subHeading
                           : props?.industry
                              ? props.industry
                              : "Retail"}
                     </h4>
                     <p className={inter_Regular.className}>
                        {props?.industryDetail
                           ? props?.industryDetail
                           : { homePageRetailDes }}
                     </p>
                  </div>
                  <div>
                     {props.industry == "Business Types" ? (
                        <div className={styles.businessTypeBox}>
                           {industryArr &&
                              industryArr.map((el, idx) => {
                                 return (
                                    <Fragment key={idx}>
                                       <div
                                          onClick={() => {
                                             const selectedID = el.name.split(" ")[0];
                                             handleClickScroll(selectedID);
                                          }}
                                       >
                                          <p
                                             className={inter_Regular.className}
                                             style={{
                                                borderLeft: `3px solid ${el.color}`,
                                                marginTop: "1rem",
                                             }}
                                          >
                                             {el.name}
                                          </p>
                                          <div style={{ height: '1.5rem', width: '1.5rem', position: 'relative', marginTop: '1.7rem' }}>
                                             <Image
                                                src="/assets/path.svg"
                                                alt="right arrow"
                                                fill
                                             />
                                          </div>
                                       </div>
                                       <hr />
                                    </Fragment>
                                 );
                              })}
                           <TransparentCustomButton text="Get Free Demo" style={{ padding: "0 2rem", marginTop: "3rem" }} onClick={(e) => {
                              router.push("/get-free-demo");
                              console.log(e);
                           }} />
                        </div>
                     ) : (
                        <>
                           <Tabs
                              data={data}
                              color={props?.color ? props.color : "#B54E3D"}
                              style={{
                                 width: "45rem",
                                 justifyContent: "flex-start",
                                 marginBottom: "1.5rem",
                              }}
                           />
                           <Link
                              className={styles.OurKeyFeatureCardContainerLink}
                              href={props.path}
                           // onClick={() => router.push(props.path)}
                           >
                              {commonKnowMore}
                           </Link>
                        </>
                     )}
                  </div>
               </div>
               <div
                  style={
                     {
                        // background:`url(${props.image})`,width:'100%',height:'100%', border:'1px solid red',
                        //  backgroundRepeat: 'no-repeat',
                        //  backgroundSize: 'cover',
                        //  position: 'relative'
                     }
                  }
                  className={`${props.industry === 'Business Types' ? styles.rightSideBBox : styles.rightSideBox}`}
               >
                  <div style={{ ...props.reciptImgStyles }}>
                     <Image
                        src={props?.recipt ? props.recipt : "/assets/smallStockCard.svg"}
                        style={{
                           display: props.industry == "Business Types" ? "none" : "block",
                           // ...props.reciptImgStyles,
                        }}
                        className={styles.stockSmallCard}
                        alt="smallCard"
                        fill
                     />
                  </div>
                  {
                     props.industry == "Business Types" ?
                        <Image
                           src={props?.image ? props.image : "/assets/retailGirl.webp"}
                           alt="Model"
                           fill
                           style={{ borderRadius: "5rem" }}
                           draggable={false}
                        />
                        :
                        <Image
                           src={props?.image ? props.image : "/assets/retailGirl.webp"}
                           alt="Model"
                           fill
                           draggable={false}
                        />
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

const HomePageTopCard = (props) => {
   const router = useRouter();
   const {
      homePageTopCardSecondTitle,
      homePageTopCardDescription,
      homePageTopCardThirdTitle,
      commonGetFreeDemo,
      commonSignUp,
   } = content;
   return (
      <div className={styles.homePageTopCard}>
         <div className={styles.homePageBusinessDetails}>
            <p className={`${inter_Regular.className} ${styles.infoLine}`}>
               {/* <span className={inter_Regular.className} style={{ fontWeight: "900" }}> */}{" "}
               {props.industryName} {/* </span> */}
            </p>
            <h1 className={`${styles.foreverybusinessText}`} style={{}}>
               {homePageTopCardSecondTitle}
               <div
                  className={`${inter_Bold.className}`}
                  style={{
                     font: "normal normal bold 5.12rem/6.5rem Inter",
                     color: "#2a6ab4"
                  }}
               >
                  {homePageTopCardThirdTitle}
               </div>
            </h1>
            <p className={`${styles.homePageBusinessDescription}`}>{homePageTopCardDescription}</p>
            <div className={styles.topCardBtns}>
               <BlackCustomButton text={commonGetFreeDemo} style={{ padding: "0 2rem" }} onClick={() => (props.setDemoModal(true), props.setHeading("Book your free demo now!"))} />
               <TransparentCustomButton text='Contact Sales' style={{ padding: "0 2rem" }} onClick={() => router.push("/contact-sales")} />
            </div>
         </div>
         <div className={styles.homePageTopCardRight}>
            {/* <center> */}
            <video
               // className={styles.iframe}
               style={{
                  width: props.iframeWidth ? props.iframeWidth : "100%",
                  // height: props.iframeHeight ? props.iframeHeight : "100%",
               }}
               autoPlay
               muted
               loop
               playsInline
            >
               <source
                  src={
                     "https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/herovideo_1080.mp4"
                  }
               />
            </video>

         </div>
      </div>
   );
};
const MarqueeComponentHomePage = (props) => {
   return (
      <div>
         <Marquee
            gradient={false}
            pauseOnHover="true"
            direction={props.direction ? props.direction : "right"}
            className={styles.mainMarqueeTagHomePage}
            style={{ ...props.style }}
         >
            {props?.ClientsArr?.map((item) => {
               return (
                  <div key={item?.altText} className={styles.marqueeHomePage} style={{ backgroundColor: props?.style?.backgroundColor && props?.style?.backgroundColor }}>
                     <div className={styles.clients_image_container} style={{ height: item?.height, width: item?.width }}>
                        <Image
                           src={item?.imgSrc}
                           style={{ ...props.logoStyle }}
                           alt={item?.altText}
                           fill
                        />
                     </div>
                  </div>
               );
            })}
         </Marquee>
      </div>
   );
};

const OurKeyFeatureHomePage = (props) => {
   const { keyFeatureContent } = props;
   const { homePageOurKeyFeaturesTitle, commonKnowMore } = content;

   return (
      <div
         className={styles.OurKeyFeatureHomePageleftContainer}
         id="ourKeyFeature"
         style={{ scrollMarginTop: "18rem" }}
      >
         <h3 className={inter_Bold.className}>{homePageOurKeyFeaturesTitle}</h3>
         <div className={styles.OurKeyFeatureHomePageleftInnerContainer}>
            {keyFeatureContent.map((el) => {
               return (
                  <div className={styles.OurKeyFeatureCardContainer}>
                     <div className={styles.features_icon_container}>
                        <Image src={el.icon} alt={el?.altText} fill />
                     </div>
                     <h4 id={el.id && el.id}>{el.title}</h4>
                     <p
                        className={`${inter_Regular.className} ${styles.ourKeyFeaturesPlaceholder1}`}
                     >
                        {el.placeholder1}
                     </p>
                     {/* <p>{el.placeholder2}</p> */}
                     {/* <Link
                        className={styles.OurKeyFeatureCardContainerLink}
                        href=""
                        onClick={() => {
                           alert("Redirecting to Actual Link");
                        }}
                     >
                        {commonKnowMore}
                     </Link> */}
                  </div>
               );
            })}
         </div>
      </div>
   );
};

const ClientsSwiper = (props) => {
   return (
      <div style={{ height: "50rem", marginTop: "2rem" }}>
         <div className={styles.ClientsSwiperBox}>
            <div className={styles.ClientsSwiperBoxLeft}>
               <img src="/assets/quote.svg" alt="quotes" style={{ height: "5rem", width: "5rem" }} />
               <p className={`${styles.commentClient}`}>{props?.comment}</p>
               <div>
                  <div className={inter_Medium.className}>{props?.name}</div>
                  <p className={inter_Regular.className}>{props?.desination}</p>
               </div>
            </div>
            <img src={props.img} alt="clients" style={{ height: "36.5rem" }} />
         </div>
      </div>
   );
};

const RightOurKeyFeatureHomePage = () => {
   return (
      <div className={homePageStyle.container}>
         <Image src='/assets/Key_feature_Icon_homePage/PosMachine.webp' alt='pos machine' fill />
         <div className={homePageStyle.detargent} ><Image src="/assets/Key_feature_Icon_homePage/Detargent.webp" alt="detargent" fill /></div>
         <div className={homePageStyle.brownrice}><Image src="/assets/Key_feature_Icon_homePage/BrownRice.webp" alt="brownrice" fill /></div>
      </div>
   );
};

const ComponentHeader = (props) => {
   return (
      <div className={styles.ourClientContainer} style={{ ...props.style }}>
         <div className={styles.section_heading}><h2 style={{ font: "normal normal 600 2.92rem/3rem Inter", ...props.titleStyle }}> {props.title} </h2><div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
      </div>
   );
};

const SwiperForCustomerFeedback = (props) => {
   const {
      homePageHereswhatouramazingclientsaresaying,
      homePageHereswhatouramazingclientsaresayingClientOne,
      homePageHereswhatouramazingclientsaresayingClientTwo,
      homePageHereswhatouramazingclientsaresayingClientThree,
   } = content;
   return (
      <div style={{ position: "relative", marginTop: "5rem", height: "66rem" }}>
         <h1
            style={{ textAlign: "center", fontSize: "2.8rem" }}
            className={`${inter_Bold.className}`}
         >
            {homePageHereswhatouramazingclientsaresaying}
         </h1>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <ClientsSwiper
                  comment={homePageHereswhatouramazingclientsaresayingClientOne}
                  name={"Vivek Singh"}
                  desination={"Designation"}
                  img={"/assets/client1.webp"}
               />
            </SwiperSlide>
            <SwiperSlide>
               <ClientsSwiper
                  comment={homePageHereswhatouramazingclientsaresayingClientTwo}
                  name={"Name"}
                  desination={"Designation"}
                  img={"/assets/client2.webp"}
               />
            </SwiperSlide>
            <SwiperSlide>
               <ClientsSwiper
                  comment={homePageHereswhatouramazingclientsaresayingClientThree}
                  name={"Name"}
                  desination={"Designation"}
                  img={"/assets/client3.webp"}
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

const OtherFeatureCompHomePage = (props) => {
   const { otherFeature } = props;
   const { commonKnowMore } = content;
   return (
      <div className={styles.otherFeatureContainerHomePage}>
         {otherFeature.map((el, index) => {
            return (
               <div
                  className={styles.otherFeatureHomePage}
                  style={{
                     boxSizing: "border-box",
                     marginLeft: index == 4 ? "20rem" : "3rem",
                     marginRight: index == 6 ? "20rem" : "3rem",
                  }}
               >
                  <div className={styles.features_icon_container}>
                     <Image src={el.icon} alt={el?.altText} fill />
                  </div>
                  <h4>{el.title}</h4>
                  <p>{el.text}</p>
                  <Link
                     className={styles.OurKeyFeatureCardContainerLink}
                     href="/"
                     onClick={() => {
                        alert("Redirecting to Actual Link");
                     }}
                  >
                     {/* {commonKnowMore} */}
                  </Link>
               </div>
            );
         })}
      </div>
   );
};

// const $ = window.$;

const ContactUsHomePage = () => {
   const {
      homePageGetInTouchWithUsTitle,
      commonPhoneNumber,
      commonEmailAddress,
      homePageReadyToGiveITAtryGmail,
      commonOfficeAddress,
      homePageOfficeAddressValue,
   } = content;
   const { wantToSkipForm, callUsNow, forProductDemo, writeToUsAt } = content.qbStrap
   return (
      <>
         <div className={styles.contactUsContainer}>
            <h4
               style={{
                  font: 'normal normal 600 1.8rem/3rem Inter',
                  color: "#343434",
                  margin: "0 0 4rem 0",
               }}
            >
               {/* {homePageGetInTouchWithUsTitle} */}
               {wantToSkipForm}
               <br /> {callUsNow}
            </h4>
            <h4
               className={inter_Medium.className}
               style={{ font: 'normal normal 600 1.8rem/3rem Inter', color: "#5A5A5A" }}
            >
               {/* For <span className={inter_Bold.className}>Free Demo,</span> Call */}
               {forProductDemo}
               {/* {commonPhoneNumber} */}
            </h4>
            <p
               className={inter_Mediumup.className}
               style={{
                  font: 'normal normal 600 1.8rem/3rem Inter',
                  color: " #5A5A5A",
                  margin: "0 0 2rem 0",
               }}
            >
               <a href="tel:+91 78 76 180 180">+91 78 76 180 180</a>
            </p>
            <h4
               className={inter_Medium.className}
               style={{ font: 'normal normal 600 1.8rem/3rem Inter', color: "#5A5A5A" }}
            >
               {writeToUsAt}
               {/* {commonEmailAddress} */}
            </h4>
            <p
               className={inter_Mediumup.className}
               style={{
                  font: 'normal normal 600 1.8rem/3rem Inter',
                  color: " #5A5A5A",
                  margin: "0 0 2rem 0",
               }}
            >
               {homePageReadyToGiveITAtryGmail}
            </p>
         </div>
      </>
   );
};

const TextInput = (props) => {
   return (
      <div>
         {!props.noLabel ? (
            <Label
               style={{
                  marginBottom: props?.styles?.labelMarginBottom ? props?.styles?.labelMarginBottom : "1.46rem",
                  color: "#222222",
                  fontSize: props?.styles?.labelSize ? props?.styles?.labelSize : "1.8rem",
               }}
            >
               {props.label}{" "}
               {props.req ? (
                  // <span style={{ color: props?.styles?.starColor ? props?.styles?.starColor : "" }}>
                  <span style={{ color: "#ff0000", position: "relative", bottom: "0.5rem", fontSize: '15px' }}>
                     *
                  </span>
               ) : (
                  ""
               )}
            </Label>
         ) : null}
         <div>
            <Input
               className={
                  props.placeHolderStyles
                     ? `${styles.reactStrapInput} ${styles.placeHolderGray}`
                     : styles.reactStrapInput
               }
               type={props.type ? props.type : "text"}
               onChange={(e) => {
                  props.onChange ? props.onChange(e) : "";
               }}
               value={props.value}
               style={{
                  width: props?.styles?.width ? props?.styles?.width : "80%",
                  height: props?.styles?.height ? props?.styles?.height : "5.1rem",
                  padding: "0 0 0 1.5rem",
                  fontSize: "1.8rem",
                  ...props.styles,
               }}
               placeholder={props.placeholder ? props.placeholder : "Enter Data ....."}
            />
            <FormFeedback
               style={{
                  display: props.feedback ? "block" : "none",
                  fontSize: props?.styles?.feedbackFontSize
                     ? props?.styles?.feedbackFontSize
                     : "1.1rem",
                  ...props.feedbackStyles,
               }}
            >
               {props.feedback}
            </FormFeedback>
         </div>
      </div>
   );
};

const DropDownInput = (props) => {
   const [state, setState] = useState(null);
   const styles36 = {
      control: (base) => ({
         ...base,
         minHeight: 30,
         height: props.styles.height ? props.styles.height : 36,
         border: "solid 1px #cfcfd4",
         cursor: "pointer",
         textAlign: 'left',
         ...props.styles,
      }),
      dropdownIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      clearIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      placeholder: (base) => ({
         ...base,
         color: '#5A5A5A99',
         fontWeight: '300',
         fontSize: "1.6rem"
      }),
   };

   const handleChange = (val) => {
      setState(val);
      props.onChange ? props.onChange(val) : "";
   };
   useEffect(() => {
      document.querySelector(".css-1u9des2-indicatorSeparator")?.remove();
   }, []);
   return (
      <div>
         {props.noLabel ? null : (
            <Label
               style={{
                  fontSize: props.styles?.labelSize ? props.styles.labelSize : "1.8rem",
                  marginBottom: props.styles?.labelMargin ? props.styles?.labelMargin : '0'
               }}
            >
               {props.label} {props.req ? <span style={{ color: "red", position: "relative", bottom: "0.5rem", fontSize: '15px' }}>*</span> : ""}
            </Label>
         )}

         <Select
            styles={styles36}
            value={state ? state : props.defaultSelected}
            placeholder={props?.placeholder}
            onChange={handleChange}
            options={props.options}
            className={styles.DropDownInput}
         />
      </div>
   );
};

const MobileImageCard = (props) => {
   return (
      <div
         style={{
            position: props.styles.position ? props.styles.position : "relative",
            ...props.styles,
         }}
      >
         {" "}
         <div style={{ height: "9rem", width: "8rem", position: "absolute", left: "3rem", top: "3rem", zIndex: '1' }}>
            <Image
               src={props.imageOneSource}
               alt="card 1"
               fill
            />
         </div>
         {props.imageTwoSource && (
            <div style={{ height: "9rem", width: "8rem", position: "absolute", left: "11rem", top: '0.7rem' }}>
               <Image
                  src={props.imageTwoSource}
                  alt="card2"
                  fill
               />
            </div>
         )}
         {props?.imageThreeSource ? (
            <div style={{
               position: props.imageThreeStyle.position
                  ? props.imageThreeStyle.position
                  : "absolute",
               ...props.imageThreeStyle
            }}>
               <Image
                  src={props.imageThreeSource}
                  alt="billing pos machine"
                  fill
               />
            </div>
         ) : null}
      </div>
   );
};

const RestaurentTypes = (props) => {
   const [state, setState] = useState([
      { text: "Restaurant", isSelected: true, id: 1, color: "#D90429" },
      { text: "Grocery", isSelected: false, id: 2, color: "#7E9F3C" },
      { text: "Retail", isSelected: false, id: 3, color: "#B54E3D" },
      { text: "Spa & Salon", isSelected: false, id: 4, color: "#7678ED" },
      { text: "Electronics", isSelected: false, id: 5, color: "#204F98" },
   ]);
   const handleClick = (selectedTab) => {
      let updatedArr = state.map((el) => {
         if (el.id == selectedTab.id) {
            el.isSelected = true;
         } else {
            el.isSelected = false;
         }
         return el;
      });
      setState(updatedArr);
   };
   return (
      <div>
         <h2 className={`${inter_Bold.className} ${styles.integrationheading}`}>{props.heading}</h2>
         <div className={`${inter_Regular.className} ${styles.integrationTypesDiv}`}>
            {state.map((el) => (
               <div
                  key={el.id}
                  onClick={() => handleClick(el)}
                  className={el.isSelected ? inter_Bold.className : inter_Regular.className}
                  style={
                     el.isSelected
                        ? {
                           backgroundColor: el.color,
                           color: "#FFFFFF",
                           fontWeight: "bold",
                           height: "8.76rem",
                        }
                        : {}
                  }
               >
                  {el.text}
               </div>
            ))}
         </div>
      </div>
   );
};

const MobileIntegrationImageCard = (props) => {
   return (
      <div style={props.styles}>
         <div style={props.imageOneSource}></div>
         <div style={props.imageTwoSource}></div>
         <div style={props.imageThreeSource}></div>
      </div>
   );
};

const MobileRestaurentTypes = (props) => {
   const [state, setState] = useState([
      { text: "Restaurant", isSelected: true, id: 1, color: "#D90429" },
      { text: "Grocery", isSelected: false, id: 2, color: "#7E9F3C" },
      { text: "Retail", isSelected: false, id: 3, color: "#B54E3D" },
      { text: "Spa & Salon", isSelected: false, id: 4, color: "#7678ED" },
      { text: "Electronics", isSelected: false, id: 5, color: "#204F98" },
   ]);
   const handleClick = (selectedTab) => {
      let updatedArr = state.map((el) => {
         if (el.id == selectedTab.id) {
            el.isSelected = true;
         } else {
            el.isSelected = false;
         }
         return el;
      });
      setState(updatedArr);
   };
   return (
      <div style={{ margin: "6rem 0 0 0" }}>
         <h2 className={`${inter_Bold.className} ${styles.MobileIntegrationheading}`}>
            {props.heading}
         </h2>
         <div className={`${inter_Regular.className} ${styles.mobileIntegrationTypesDiv}`}>
            {state.map((el) => (
               <div
                  key={el.id}
                  onClick={() => handleClick(el)}
                  className={el.isSelected ? inter_Bold.className : inter_Regular.className}
                  style={
                     el.isSelected
                        ? {
                           backgroundColor: el.color,
                           color: "#FFFFFF",
                           fontWeight: "bold",
                           height: "8rem",
                        }
                        : {}
                  }
               >
                  {el.text}
               </div>
            ))}
         </div>
      </div>
   );
};

const MobileIndustrySpecific = (props) => {
   const { industries, industryContent } = props;
   const retailData = [
      {
         title: "Inventory management",
         content: "Record and manage your inventory across all locations in one place.",
      },
      {
         title: "Billing",
         content: "Process quick payments with access to integrations.",
      },
      {
         title: "eStore",
         content: "Create your e-store & start selling online in seconds.",
      },
      {
         title: "CRM & Loyalty",
         content: "A suit of CRM Tools to make your customers love you.",
      },
      {
         title: "Inventory management",
         content: "Record and manage your inventory across all locations in one place.",
      },
      {
         title: "Billing",
         content: "Process quick payments with access to integrations.",
      },
      {
         title: "eStore",
         content: "Create your e-store & start selling online in seconds.",
      },
      {
         title: "CRM & Loyalty",
         content: "A suit of CRM Tools to make your customers love you.",
      },
   ];
   let contentOne = (
      <div className={styles.keyFeaturesBoxMobile}>
         {retailData.map((item) => {
            return (
               <div>
                  <h3
                     style={{ paddingTop: "1rem", fontSize: "2rem" }}
                     className={inter_Bold.className}
                  >
                     {item.title}
                  </h3>
                  <p>{item.content}</p>
               </div>
            );
         })}
      </div>
   );

   let contentTwo = (
      <div className={styles.keyFeaturesBoxMobile}>
         {retailData.map((item) => {
            return (
               <div>
                  <h3
                     style={{ paddingTop: "1rem", fontSize: "2rem" }}
                     className={inter_Bold.className}
                  >
                     {item.title}
                  </h3>
                  <p>{item.content}</p>
               </div>
            );
         })}
      </div>
   );
   return (
      <div style={{ padding: "2rem" }}>
         {industryContent.map((item) => {
            let contentOne = (
               <div className={styles.keyFeaturesBoxMobile}>
                  {item.keyFeature.map((item) => {
                     return (
                        <div>
                           <h4
                              style={{ paddingTop: "1rem", fontSize: "2rem" }}
                              className={inter_Bold.className}
                           >
                              {item.heading}
                           </h4>
                           <p>{item.content}</p>
                        </div>
                     );
                  })}
               </div>
            );

            let contentTwo = (
               <div className={styles.keyFeaturesBoxMobile}>
                  {item.outletTypes.map((item) => {
                     return (
                        <div>
                           <h4
                              style={{ paddingTop: "1rem", fontSize: "2rem" }}
                              className={inter_Bold.className}
                           >
                              {item.heading}
                           </h4>
                           <p>{item.content}</p>
                        </div>
                     );
                  })}
               </div>
            );
            let data = [
               {
                  heading: "Key Features",
                  content: contentOne,
               },
               {
                  heading: "Outlet Types",
                  content: contentTwo,
               },
            ];
            return (
               <div style={{ marginBottom: "3rem" }} id={item.title.split(" ")[0] + "mobile"}>
                  <div
                     className={styles.headerIndustry}
                     style={{ backgroundColor: item.color, width: "85%" }}
                  >
                     {/* Placeholder for H1 */}
                     {item.placeholder}
                  </div>
                  <h4
                     style={{ paddingTop: "2rem", font: "normal normal 600 1.8rem/2.5rem Inter", paddingBottom: "0.5rem" }}
                     className={inter_Bold.className}
                  >
                     {item.title}
                  </h4>
                  <div style={{ font: "normal normal normal 1.8rem/2.6rem Inter" }}>{item.desc}</div>
                  <center
                     style={{ paddingTop: "3rem", paddingBottom: "1rem", marginBottom: "2rem" }}
                  >
                     <MobileImageCard
                        styles={{
                           backgroundImage: `url(${item.image1})`,
                           backgroundRepeat: "no-repeat",
                           height: "36rem",
                           width: "42rem",
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                           backgroundSize: "89vw",
                        }}
                        imageOneStyle={{
                           height: "12.5rem",
                           left: "3.5rem",
                           top: "1rem",
                        }}
                        imageOneSource={item.image2}
                     />
                  </center>
                  <Tabs
                     data={data}
                     color={item.color}
                     labelPadding={"1.7rem 1rem"}
                     style={{
                        // width: "42rem",
                        justifyContent: "flex-start",
                        marginBottom: "1.5rem",
                     }}
                  />
               </div>
            );
         })}
      </div>
   );
};

const ClientsSwiperMobile = (props) => {
   const data = {
      image: props.image,
      comaImage: "/assets/quote.svg",
      text: props.content,
      clientName: "Vivek Singh",
      designation: "Designation",
   };

   return (
      <div style={{ margin: "0 1.4rem", paddingBottom: "10rem" }}>
         <img src={data.image} style={{ height: "100%", width: "100%" }} />
         <img
            src="/assets/quote.svg"
            style={{ height: "3rem", marginTop: "3rem", marginBottom: "3rem" }}
         />
         <div>{data.text}</div>
         <div
            style={{
               paddingTop: "1.8rem",
               fontWeight: "600",
               fontSize: "2rem",
               paddingBottom: "1.8rem",
            }}
         >
            {data.clientName}
         </div>
         <div>{data.designation}</div>
      </div>
   );
};

const SwiperForCustomerFeedbackMobile = (props) => {
   const {
      homePageHereswhatouramazingclientsaresaying,
      homePageHereswhatouramazingclientsaresayingClientOne,
      homePageHereswhatouramazingclientsaresayingClientTwo,
      homePageHereswhatouramazingclientsaresayingClientThree,
   } = content;
   return (
      <div style={{ position: "relative", marginTop: "5rem" }}>
         <div
            style={{
               fontWeight: "700",
               fontSize: "2rem",
               textAlign: "center",
               paddingBottom: "1.5rem",
            }}
         >
            {homePageHereswhatouramazingclientsaresaying}
         </div>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               <ClientsSwiperMobile
                  image={"/assets/client1.webp"}
                  content={homePageHereswhatouramazingclientsaresayingClientOne}
               />
            </SwiperSlide>
            <SwiperSlide>
               <ClientsSwiperMobile
                  image={"/assets/client2.webp"}
                  content={homePageHereswhatouramazingclientsaresayingClientTwo}
               />
            </SwiperSlide>
            <SwiperSlide>
               <ClientsSwiperMobile
                  image={"/assets/client3.webp"}
                  content={homePageHereswhatouramazingclientsaresayingClientThree}
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

const EmployeeReviewSwiper = (props) => {
   const { } = content;
   return (
      <div
         style={{
            border: "1px solid #707070",
            borderRadius: "25px",
            width: "35.04rem",
            padding: "1rem",
            position: "relative",
            marginTop: "2rem",
            height: "30rem",
         }}
      >
         <div style={{ height: "2.5rem", width: '3rem', position: "absolute", top: "-1.5rem", left: "42.5%", }}>
            <Image
               src="/assets/orange_comas.svg"
               alt="double quotations"
               fill
            />
         </div>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
               padding: "1rem 1rem 0 1rem",
               height: "100%"
            }}
         >
            <p
               style={{
                  color: "#707070",
                  fontSize: "1.3rem",
                  paddingTop: "1.5rem",
                  textAlign: "left",
               }}
            >
               {props.cardDesc}
            </p>
            <div style={{ display: "flex", alignItems: "end", paddingBottom: "0.5rem", }}>
               <div style={{ height: "4.38rem", width: "4.38rem", marginRight: "1.5rem", position: 'relative' }}>
                  <Image
                     src={props.empImage}
                     alt="employee image"
                     fill
                     style={{ borderRadius: '50%' }}
                  />
               </div>
               <div>
                  <div style={{ fontSize: "1.606rem", color: "#222222", textAlign: "left" }}>{props.name}</div>
                  <div style={{ color: "#707070", fontSize: "1.314rem", textAlign: "left" }}>
                     {props.designation}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

const OuterEmployeeSwiper = () => {
   const {
      careerEmployeeReviews,
      careerEmployeeReviewsDesc,
      careerEmployeesCardDesc,
      careerEmployeesCardDesc2,
      careerEmployeesCardDesc3,
   } = content;
   return (
      <div>
         <h2 style={{ textAlign: "center", font: "normal normal bold 4.08rem/4.964rem inter" }}>
            {careerEmployeeReviews}
         </h2>
         <p
            style={{
               textAlign: "center",
               width: "59.67rem",
               margin: "auto",
               marginTop: "2rem",
               marginBottom: "6rem",
               font: "normal normal normal 1.314rem/1.606rem inter",
            }}
         >
            {careerEmployeeReviewsDesc}
         </p>
         <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
               delay: 8000,
               disableOnInteraction: false,
            }}
            pagination={{
               dynamicBullets: true,
               clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
         >
            {
               employeeReviews?.map((ele) => {
                  return (
                     <SwiperSlide>
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "6rem" }}>
                           <EmployeeReviewSwiper
                              cardDesc={ele?.testimony}
                              empImage={ele?.image}
                              name={ele?.name}
                              designation={ele?.designation}
                           />
                        </div>
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </div>
   );
};

const OurBenefits = (props) => {
   const { benefits } = props;
   const { careerOurBenefits, careerOurBenefitsDesc } = content;
   return (
      <div>
         <h2 style={{ textAlign: "center", font: " normal normal bold 4.08rem/4.964rem inter" }}>
            {careerOurBenefits}
         </h2>
         <p
            style={{
               textAlign: "center",
               width: "26.645rem",
               margin: "auto",
               marginTop: "2rem",
               marginBottom: "6rem",
               font: "normal normal normal 1.314rem/1.606rem inter",
            }}
         >
            {careerOurBenefitsDesc}
         </p>
         <div className={styles.ourBenefitsOuter}>
            {benefits.map((el, index) => {
               return (
                  <div
                     className={styles.ourBenefits}
                     style={{
                        boxSizing: "border-box",
                        marginLeft: index == 3 ? "25rem" : "1.5rem",
                        marginRight: index == 4 ? "25rem" : "1.5rem",
                        display: "flex",
                        // alignItems: "center",
                     }}
                  >
                     <div
                        style={{
                           borderRadius: "50%",
                           height: "7.3rem",
                           width: "7.3rem",
                           marginRight: "2rem",
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           // border: "2px solid red",
                        }}
                     >
                        <div style={{ height: "7.3rem", width: '7.3rem', position: 'relative' }} >
                           <Image src={el.img} alt="err" fill />
                        </div>
                     </div>
                     <div style={{ width: "20.8rem" }}>
                        <h4 style={{ font: "normal 700 1.6rem/2rem inter", width: "20rem" }}>
                           {el.title}
                        </h4>
                        <div
                           style={{
                              font: "normal 400 normal 1.314rem/1.606rem inter",
                              color: "#222222",
                              height: "6rem",
                              width: "20.8rem",
                              // overflowY: "scroll",
                              margin: "0 0 2rem 0",
                           }}
                        >
                           {el.content}
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

const VacancyCard = (props) => {
   const { title, description, vacancyType, vacancyLocation, id } = props;
   return (
      <div
         style={{
            display: "flex",
            // height: "19rem",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "29.2rem",
            border: "1px solid #222222",
            borderRadius: "1rem",
            padding: "2rem 1.5rem 2rem 1.5rem",
         }}
      >
         <div style={{ marginBottom: "0.7rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
               <h3 style={{ fontWeight: "600", fontSize: "1.6rem" }}>{title}</h3>
            </div>
         </div>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <div style={{ display: "flex", justifyContent: "space-around", width: "15rem" }}>
               <h4 style={{ marginRight: "1rem", fontWeight: "600", fontSize: "1.7rem" }}>
                  {vacancyType}
               </h4>
               <div
                  style={{ color: "rgb(101 99 99)", font: "normal 300 normal 1.3rem/2rem inter" }}
               >
                  {vacancyLocation}
               </div>
            </div>
            <CustomButton
               text={"Detail"}
               onClick={() => {
                  window.open(`https://queuebuster.keka.com/careers/jobdetails/${id}`);
               }}
               styles={{
                  backgroundColor: "#020D48",
                  borderRadius: "6px",
                  color: "#FFFFFF",
                  border: "1px solid #020D48",
                  width: "8.76rem",
                  height: "2.92rem",
                  fontSize: "1.3rem",
               }}
            />
         </div>
      </div>
   );
};

const OuterMobileEmployeeReviewSwiper = () => {
   const {
      careerEmployeesCardDescMobile,
      careerEmployeesCardDesc2Mobile,
      careerEmployeesCardDesc3Mobile,
   } = content;
   return (
      <div>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
               delay: 8000,
               disableOnInteraction: false,
            }}
            pagination={{
               dynamicBullets: true,
               clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
         >
            {
               employeeReviews?.map((ele) => {
                  return (
                     <SwiperSlide>
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "4rem" }}>
                           <EmployeeReviewSwiper
                              cardDesc={ele?.testimony}
                              empImage={ele?.image}
                              name={ele?.name}
                              designation={ele?.designation}
                           />
                        </div>
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </div>
   );
};


const HelpAndSupportCard = (props) => {
   return (
      <div
         style={{
            width: "28rem",
            height: "14rem",
            padding: "1rem",
            border: "1px solid #707070",
            borderRadius: "8px",
         }}
      >
         {/* <div style={{ height: "2.5rem", width: "2rem", backgroundColor: "grey" }}> */}

         <div style={{ height: "2.6rem", width: '2.6rem', position: 'relative' }}><Image src={props.data.img} alt="signup" fill /></div>
         {/* </div> */}
         <div style={{ fontWeight: "600", fontSize: "1.8rem", marginTop: "0.8rem" }}>
            {props.data.heading}
         </div>
         <div style={{ fontSize: "1.2rem", color: "#222222", marginTop: "0.5rem" }}>
            {props.data.desc}
         </div>
      </div>
   );
};

const OurRecommandationNewModal = (props) => {
   const { className, openModal, modalData } = props;
   const toggle = () => props.setModalOpen(!openModal);
   return (
      <div>
         <Form inline onSubmit={(e) => e.preventDefault()}></Form>
         <Modal
            style={{ backgroundColor: modalData.bgColor }}
            isOpen={openModal}
            toggle={toggle}
            className={className}
         >
            <ModalHeader
               style={{ backgroundColor: modalData.bgColor }}
               toggle={toggle}
            ></ModalHeader>
            <ModalBody style={{ backgroundColor: modalData.bgColor }}>
               <div>
                  <h1 className={inter_Bold.className}>{modalData.inches}</h1>
                  <ul className={inter_Medium.className}>
                     {modalData && modalData.description.map((el) => <li>{el}</li>)}
                  </ul>
               </div>
               <img
                  style={{ height: modalData ? modalData.imgHeight : "" }}
                  src={modalData.img}
                  alt="err"
               />
            </ModalBody>
         </Modal>
      </div>
   );
};

const AwardsandRecognition = (props) => {
   const { homeAwardsandRecognition } = content;
   return (
      <>
         <h3 className={`${inter_Bold.className} ${styles.AwardsandRecognitionTitle}`}>
            {homeAwardsandRecognition}
         </h3>
         <div className={styles.AwardsandRecognitionCardContainer}>
            {props.data &&
               props.data.map((el) => (
                  <div className={styles.AwardsandRecognitionCard}>
                     <div className={styles.awards_img_container}>
                        <Image src={el.img} alt={el?.altText} fill />
                     </div>
                     <p className={inter_Bold.className}>{el.title}</p>
                     <p className={inter_Medium.className}>{el.desc}</p>
                  </div>
               ))}
         </div>
      </>
   );
};
const AwardsandRecognitionMobile = (props) => {
   const { homeAwardsandRecognition } = content;
   return (
      <>
         <h3 className={`${inter_Bold.className} ${styles.AwardsandRecognitionTitle}`}>
            {homeAwardsandRecognition}
         </h3>
         <div className={styles.AwardsandRecognitionCardContainermobile}>
            {props.data &&
               props.data.map((el) => (
                  <div className={styles.AwardsandRecognitionCard}>
                     <div style={{ height: '7rem', width: '14rem', position: 'relative', marginBottom: '1rem' }}>
                        <Image src={el.img} alt={el?.altText} fill />
                     </div>
                     <p className={inter_Bold.className}>{el.title}</p>
                     <p className={inter_Medium.className}>{el.desc}</p>
                  </div>
               ))}
         </div>
      </>
   );
};

const HelpBtn = () => {
   const { help } = content.qbStrap
   return (
      <div className={styles.whatsapp_help_btn}>
         <a target="_blank" href="https://api.whatsapp.com/send/?phone=919311101455&text=Hello&type=phone_number&app_absent=0"><div style={{ height: '20px', width: '20px', position: 'relative' }} ><Image src="/assets/whatsapp.png" alt="whatsapp icon" fill /> </div>{help}</a>
      </div>
   )
}

const BlueCustomButton = (props) => {
   return (
      <Button className={`${styles.blue_custom_button}`}
         style={{
            height: props?.styles?.height ? props.styles.height : "4.5rem",
            width: props?.styles?.width ? props.styles.width : "",
            fontSize: props?.styles?.fontSize ? props.styles.fontSize : "1.5rem",
            fontWeight: props?.styles?.fontWeight ? props.styles.fontWeight : 600,
            ...props?.style
         }}
         onClick={(e) => {
            props.onClick ? props.onClick(e) : "";
         }}
      >
         {props?.text}
      </Button>
   )
}

const WhiteCustomButton = (props) => {
   return (
      <Button className={`${styles.white_custom_button}`}
         style={{
            height: props?.styles?.height ? props.styles.height : "4.5rem",
            width: props?.styles?.width ? props.styles.width : "",
            fontSize: props?.styles?.fontSize ? props.styles.fontSize : "1.5rem",
            fontWeight: props?.styles?.fontWeight ? props.styles.fontWeight : 600,
            ...props?.style
         }}
         onClick={(e) => {
            props.onClick ? props.onClick(e) : "";
         }}
      >
         {props?.text}
      </Button>
   )
}

const BlackCustomButton = (props) => {
   return (
      <Button className={`${styles.black_custom_button}`}
         style={{
            height: props?.styles?.height ? props.styles.height : "4.5rem",
            width: props?.styles?.width ? `${props.styles.width}` : "",
            fontSize: props?.styles?.fontSize ? props.styles.fontSize : "1.5rem",
            fontWeight: props?.styles?.fontWeight ? props.styles.fontWeight : 600,
            ...props?.style
         }}
         onClick={(e) => {
            props.onClick ? props.onClick(e) : "";
         }}
      >
         {props?.text}
      </Button>
   )
}

const TransparentCustomButton = (props) => {
   return (
      <Button
         style={{
            backgroundColor: "transparent",
            color: "#000",
            border: "1px solid #000",
            height: props?.styles?.height ? props.styles.height : "4.5rem",
            width: props?.styles?.width ? props.styles.width : "",
            fontSize: props?.styles?.fontSize ? props.styles.fontSize : "1.5rem",
            fontWeight: props?.styles?.fontWeight ? props.styles.fontWeight : 600,
            ...props?.style
         }}
         onClick={(e) => {
            props.onClick ? props.onClick(e) : "";
         }}
      >
         {props?.text}
      </Button>
   )
}


export {
   MarqueeComponent,
   OutletTypes,
   FAQCard,
   RecentPost,
   OurKeyFeatures,
   GiveItTry,
   Iframe,
   Tabs,
   IndustryWiseCard,
   HomePageTopCard,
   MarqueeComponentHomePage,
   OurKeyFeatureHomePage,
   RightOurKeyFeatureHomePage,
   ClientsSwiper,
   CustomButton,
   ComponentHeader,
   OtherFeatureCompHomePage,
   ContactUsHomePage,
   SwiperForCustomerFeedback,
   TextInput,
   DropDownInput,
   MobileImageCard,
   RestaurentTypes,
   MobileIndustrySpecific,
   ClientsSwiperMobile,
   SwiperForCustomerFeedbackMobile,
   OuterEmployeeSwiper,
   OurBenefits,
   VacancyCard,
   OuterMobileEmployeeReviewSwiper,
   MobileRestaurentTypes,
   MobileIntegrationImageCard,
   HelpAndSupportCard,
   OurRecommandationNewModal,
   AwardsandRecognition,
   AwardsandRecognitionMobile,
   HelpBtn,
   BlueCustomButton,
   WhiteCustomButton,
   BlackCustomButton,
   TransparentCustomButton
};

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import styles from "../../styles/common/Hamburger.module.css";
import { CustomButton } from "../qbStrap";
import Image from "next/image";

const HamburgerMobile = (props) => {
   const { setShowHamburger } = props;
   const [open, setOpen] = useState(0);
   const router = useRouter();
   const toggle = (id) => {
      if (open === id) {
         setOpen();
      } else {
         setOpen(id);
      }
   };
   const sideBar = [
      {
         id: 1,
         header: "Industries",
         content: [
            { title: "Retail", url: "/Industries/retail-pos-billing-software" },
            { title: "Restaurants", url: "/Industries/restaurant-pos-billing-software" },
            { title: "Grocery", url: "/Industries/grocery-pos-billing-software" },
            { title: "Electronics", url: "/Industries/electronic-pos-billing-software" },
            { title: "Spa & Salon", url: "/Industries/spa-and-salon-pos-billing-software" },
         ],
      },
      {
         id: 2,
         header: "Features",
         content: [
            { title: "Quick Bill", url: "/features/billing-software" },
            { title: "Billing / Invoices", url: "/features/billing-software" },
            { title: "Inventory Management", url: "/features/inventory-management-software" },
            { title: "eStore / Online Dukaan", url: "/features/online-store" },
            { title: "Khata / Digital Ledger", url: "/features/khata-management-software" },
            { title: "CRM & Loyalty", url: "/features/customer-loyalty-program" },
            { title: "Accept Payments", url: "/features/digital-payment-software" },
            { title: "Cloud Dashboard", url: "/features/cloud-dashboard-management" },
            { title: "ERP Ready", url: "/" }
         ],
      },
      {
         id: 3,
         header: "Company",
         content: [
            { title: "About Us", url: "/about-us" },
            { title: "Media", url: "/media" },
            { title: "Careers", url: "/career" },
            { title: "Contact Us", url: "/contact-us" },
         ]
      }
   ];
   return (
      <div
         style={{
            width: "100vh",
            height: "100vh",
            zIndex: "6",
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.3)",

         }}
         onClick={() => setShowHamburger(0)}
      //  className={styles.hamburgerOpenAnimation}
      >
         <div
            style={{
               height: "100vh",
               width: "100vw",
               backgroundColor: "white",
               position: "absolute",
               zIndex: "150",
               paddingTop: "7rem",
            }}
            onClick={(e) => e.stopPropagation()}
            className={styles.hamburgerOpenAnimation}

         >
            {/* <div style={{ width: "90vw" }}> */}
            <div style={{ height: "100%" }}>
               <div style={{ padding: '1rem', height: '75%', overflow: 'scroll' }}>
                  {
                     sideBar?.map((ele) => {
                        return (
                           <Accordion flush open={open} toggle={toggle}>
                              <AccordionItem style={{ border: 'none', backgroundColor: "transparent" }}>
                                 <AccordionHeader
                                    targetId={ele?.id}
                                    className={styles.mobileNavHeader}
                                    style={{ marginTop: "1rem" }}
                                 >
                                    {ele?.header}
                                 </AccordionHeader>
                                 {/* <hr style={{ border: "0.5px solid #A4ABBD" }} />   */}
                                 {
                                    ele?.content?.map((item) => {
                                       return (
                                          <AccordionBody accordionId={ele?.id} className={styles.mobileNavBody} isOpen={true} >
                                             <div>
                                                <div
                                                   onClick={() =>
                                                      router
                                                         .push(item?.url)
                                                         .then(() => setShowHamburger(0))
                                                   }
                                                >
                                                   {item?.title}
                                                </div>{" "}
                                             </div>
                                          </AccordionBody>
                                       )
                                    })
                                 }
                              </AccordionItem>
                              <hr style={{ border: "0.5px solid #A4ABBD", margin: "0" }} />
                           </Accordion>
                        )
                     })
                  }

                  {/* <hr style={{ border: "0.5px solid #A4ABBD", margin: "0" }} /> */}
                  <h4
                     style={{
                        paddingLeft: "1.2rem",
                        fontWeight: "600",
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                        whiteSpace: "nowrap",
                        overflowX: "hidden",
                        marginBottom: '0',
                        fontSize: "2rem"
                     }}
                  >
                     <p onClick={() => router.push("/pricing").then(() => setShowHamburger(0))} style={{ fontSize: "1.9rem", fontWeight: '700' }}>
                        Pricing
                     </p>
                  </h4>
                  <hr style={{ border: "0.5px solid #A4ABBD" }} />

                  <h4
                     style={{
                        paddingLeft: "1.2rem",
                        fontWeight: "600",
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                        whiteSpace: "nowrap",
                        overflowX: "hidden",
                        marginBottom: '0',
                        fontSize: "2rem"
                     }}
                  >
                     <p onClick={() => router.push("/enterprise-pos-solution").then(() => setShowHamburger(0))} style={{ fontSize: "1.9rem", fontWeight: '700' }}>
                        Enterprise
                     </p>
                  </h4>
                  <hr style={{ border: "0.5px solid #A4ABBD" }} />

               </div>

               <div className={styles.bottom_content}>
                  <div style={{ width: '100%' }}>
                     <CustomButton
                        text={"Get Free Demo"}
                        styles={{ backgroundColor: "#000D4B", border: "transparent", width: "100%" }}
                        onClick={() => router.push("/get-free-demo").then(() => setShowHamburger(0))}
                     />
                  </div>
                  <div style={{ width: '100%' }} className={styles.login_btn}>
                     <Link href={"https://manage.queuebuster.co/"}>
                        <h4>Login</h4>
                     </Link>
                  </div>
                  <div className={styles.contact_option}>
                     <div>
                        <div><Image src='/assets/navPhone.svg' alt='call icon' fill /></div>
                        <span><a href="tel:+91 78 76 180 180">+91 78 76 180 180</a></span>
                     </div>
                     <p className={styles.contact_info}>Only for demo and sales inquiry</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default HamburgerMobile;

import styles1 from "../../styles/common/FAQstyle.module.css";
import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Label } from "reactstrap";
import content from "../../language/ENGLISH.json";
import Image from "next/image";

const FAQmobile = (props) => {
   const { FaqTableData } = props;
   const { commonViewAllQuestion, commonFrequentlyAskedQuestions } = content;
   const [open, setOpen] = useState("");
   const [desiredLength, setDesiredLength] = useState(5);

   const toggle = (id) => {
      if (open === id) {
         setOpen();
      } else {
         setOpen(id);
      }
   };
   const handleArrLength = () => {
      let element = document.getElementById("faqMobile12");
      element && element.scrollIntoView({ behavior: "smooth" });
      if (desiredLength == 5) {
         setDesiredLength(FaqTableData.length);
      } else {
         setDesiredLength(5);
      }
   };
   return (
      <div id="faqMobile12" style={{ margin: "2rem 1.4rem 4rem 1.4rem", scrollMarginTop: "9rem" }}>
         <div>
            <h4
               style={{
                  font: "normal normal 700 2.5rem/3.3rem Inter",
                  padding: "1rem",
                  textAlign: "center",
               }}
            >
               {props?.heading ? props?.heading : commonFrequentlyAskedQuestions}
            </h4>
            <div style={{ height: '2rem', width: '15rem', position: 'relative', left: '11rem', top: '-1.5rem' }}><Image src='/assets/strokes_svg/faq_hl.svg' alt='faq stroke' fill /></div>
            </div>
            <div
               style={{
                  // boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.4rem 1.2rem",
                  borderRadius: "1rem",
                  // backgroundColor:"#FFFFFF"
               }}
            >
               <div className={styles1.container}>
                  {FaqTableData?.slice(0, desiredLength).map((el, index) => {
                     return (
                        <>
                           <div
                              key={el.id}
                              className={styles1.accContainer}
                              style={{ width: props.width ? props.width : "" }}
                           >
                              <Accordion flush={true} open={open} toggle={toggle}>
                                 <AccordionItem style={{ background: 'transparent' }}>
                                    <AccordionHeader targetId={index} className={styles1.accHeader}>
                                       {el.para}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={index} className={styles1.acctoggle} >
                                       <div dangerouslySetInnerHTML={{ __html: el.des }}></div>
                                    </AccordionBody>
                                 </AccordionItem>
                              </Accordion>
                           </div>
                           <hr style={{ border: "0.1rem solid #c3c0c0" }} />
                        </>
                     );
                  })}
               </div>
               <h4
                  style={{
                     color: "#2A6AB4",
                     font: "normal normal bold 1.5rem/2rem Inter",
                     textAlign: "center",
                     paddingBottom: "2rem",
                  }}
                  onClick={handleArrLength}
               >
                  {desiredLength == FaqTableData?.length ? "View Less" : commonViewAllQuestion}
               </h4>
            </div>
         </div>
         );
};
         export default FAQmobile;

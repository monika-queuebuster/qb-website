import { inter_Bold } from "@/components/common/Fonts";
import { FAQCard } from "@/components/qbStrap";
import React from "react";
import { useState } from "react";
import content from "../../language/ENGLISH.json";
import Image from "next/image";

const FrequentQuestions = (props) => {
   const {commonFrequentlyAskedQuestions} = content
   return (
      <>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               // alignItems: "center",
               // height: "100vh",
               margin: "0 0rem",
               padding: "0 11rem",
               // border:"2px solid green"
            }}
         >
            <center style={{width:'fit-content', margin: 'auto', position: 'relative'}}>
               <h4 className={inter_Bold} style={{ marginBottom: "0rem", font: "normal normal bold 2.5rem/3.1rem Inter" }}>
                 {props?.heading ? props?.heading : commonFrequentlyAskedQuestions}
               </h4>
               <div style={{height: '2rem', width: '15rem', position: 'absolute', marginBottom: '2.8rem', right: '0'}}><Image src='/assets/strokes_svg/faq_hl.svg' alt='faq stroke' fill /></div>
            </center>
            <div
               style={{
                  // border: "0.1rem solid gainsboro",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem 0 2rem 0rem",
                  justifyContent: "center",
                  alignItems: "center",
                  // width: "90vw",
                  // boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.4rem 1.2rem",
                  // backgroundColor:"white"
               }}
            >
               <FAQCard FaqTableData={props.FaqTableData}/>
            </div>
         </div>
      </>
   );
};

export default FrequentQuestions;

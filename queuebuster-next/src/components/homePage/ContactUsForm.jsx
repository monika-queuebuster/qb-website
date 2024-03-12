import React, { use, useEffect, useState } from "react";
import { Button, Card, Form, FormFeedback, FormGroup, Input } from "reactstrap";
import content from "../../language/ENGLISH.json";
import styles from "../../styles/coontausHome/contactUsHome.module.css";
import { CountryCodeSelect } from "../phoneNoDropdown/phoneDropdown";
import { TextInput } from "../qbStrap";
import { inter_Medium } from "../common/Fonts";
import { getFreeDemo } from "@/services/signUpServices";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { DropDownInput } from "@/components/qbStrap";;

const ContactUsForm = (props) => {
   const [name, setName] = useState("");
   const [mobileNo, setMobileNo] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [phoneCode, setPhoneCode] = useState(91);
   const [queryType, setQueryType] = useState("");
   const [errors, setErrors] = useState({
      nameError: "",
      mobileNoError: "",
      emailError: "",
      messageError: "",
      queryError: "",
   });
   const router = useRouter();
   const {
      commonName,
      commonNameValidation,
      commonMobileNumber,
      commonMobileNumberError,
      commonEmailAddress,
      commonEmailValidation,
   } = content;


   const apiCall = () => {
      const storedSource = localStorage.getItem("sources");
      var EMAIL_VALIDATION_REGEX =
         /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      var NAME_VALIDATION_REGEX = /^[A-Za-z\s]+$/
      if (!name) {
         setErrors({ ...errors, nameError: "Name is required" });
         return false;
      } else if (!NAME_VALIDATION_REGEX.test(name)) {
         setErrors({ ...errors, nameError: "Please enter a valid name" });
         return false;
      } else if (!mobileNo) {
         setErrors({ ...errors, mobileNoError: "Mobile number is required" });
         return false;
      } else if (mobileNo.length > 10 || mobileNo.length < 10) {
         setErrors({ ...errors, mobileNoError: "Please enter a valid mobile number" });
         return false;
      } else if (!email) {
         setErrors({ ...errors, emailError: "Email is required" });
         return false;
      } else if (email.match(EMAIL_VALIDATION_REGEX) == null) {
         setErrors({ ...errors, emailError: "Please enter a vaild email" });
         return false;
      } else if (!queryType) {
         setErrors({ ...errors, queryError: "Please select a query type" });
         return false;
      } else if (!message) {
         setErrors({ ...errors, messageError: "Message is required" });
         return false;
      } else if (name && mobileNo && email && queryType && message) {
         let data = {
            countryCode: phoneCode,
            phone: mobileNo,
            name: name,
            email: email,
            queryType: queryType,
            message: message,
            source: storedSource && JSON.parse(storedSource)
         };

         toast.promise(getFreeDemo(data, router), {
            loading: "Loading...",
            success: (data) => {
               localStorage.removeItem("sources")
               return `${data}`;
            },
            error: (data) => {
               return `${data}`;
            },
         });
         // getFreeDemo(data, router);
      }
      return false;
   };
   useEffect(() => {
      if (mobileNo > 0) {
         setErrors({ ...errors, mobileNoError: "" });
      }
   }, [mobileNo]);

   const queryTypeOptions = [
      {
         label: 'Sales/Pricing',
         value: 'sales',
      },
      {
         label: 'Product Support',
         value: 'product-support',
      },
      {
         label: 'Product Feedback',
         value: 'product-feedback',
      },
      {
         label: 'Marketing/PR',
         value: 'marketing',
      },
      {
         label: 'Partnerships',
         value: 'partnerships',
      },
      {
         label: 'Careers',
         value: 'careers',
      },
      {
         label: 'Others',
         value: 'others',
      },
   ]

   return (
      <>
         <div
            style={{
               backgroundColor: "white",
               display: "flex",
               justifyContent: "space-around",
               flexDirection: "column",
               backgroundColor: "#EFF6FF",
               width: "71.2rem",
               alignItems: "left",
               borderRadius: "4rem 0 0 4rem",
            }}
         >
            <Form className="form" style={{ padding: "4.9rem 5.25rem" }}>
               <h4 style={{ marginBottom: '2rem', fontSize: '2.6rem' }}>Get in touch with our team.</h4>
               <FormGroup className="d-flex" style={{ height: "5.7rem", width: '100%' }}>
                  <div style={{ width: '50%' }}>
                     <TextInput
                        className={inter_Medium.className}
                        type="text"
                        noLabel={1}
                        placeHolderStyles={true}
                        placeholder="Name"
                        feedback={errors.nameError ? errors.nameError : ""}
                        onChange={(e) => (
                           setName(e.target.value), setErrors({ ...errors, nameError: "" })
                        )}
                        // onChange={(e) => setName(e.target.value)}
                        value={name}
                        styles={{
                           width: '100%',
                           height: "5.1rem",
                           borderRadius: "0.73rem",
                           font: "normal normal normal 1.6rem/2.2rem Inter",
                           padding: "0 0 0 1.5rem",
                           color: "#5A5A5A",
                           fontWeight: "300",
                           border: "none",
                           boxShadow: "0px 0px 4px #00000033",
                           // margin: "0 0 0.5rem 0 ",
                        }}

                     />
                  </div>
                  <div style={{ marginLeft: "2.92rem", width: '50%' }}>
                     <CountryCodeSelect
                        width={"100%"}
                        height={"5.1rem"}
                        margin={"0 !important"}
                        placeHolderStyles={true}
                        placeholder={"Mobile number"}
                        feedback={errors.mobileNoError ? errors.mobileNoError : ""}
                        inputStyles={{
                           margin: 0,
                           fontSize: "1.65rem",
                           border: "none",
                           boxShadow: "0px 0px 4px #00000033",
                           borderRadius: "0 0.73rem 0.73rem 0",
                           clipPath: "inset(-4px -4px -4px 0px)",
                        }}
                        countryCodeStyles={{
                           border: "none",
                           boxShadow: "0px 0px 4px #00000033",
                           borderRadius: "0.73rem 0 0 0.73rem",
                        }}
                        onChange={(value) => {
                           // setCountry(value.country);
                           setPhoneCode(value.phoneCode);
                           setMobileNo(value.phoneNumber);
                        }}
                        value={mobileNo}
                     />
                  </div>
               </FormGroup>
               <FormGroup style={{ height: "5.7rem", marginTop: errors.nameError || errors.mobileNoError ? '20px' : '0' }} >
                  <TextInput
                     className={inter_Medium.className}
                     type="text"
                     noLabel={1}
                     placeHolderStyles={true}
                     placeholder={commonEmailAddress}
                     feedback={errors.emailError ? errors.emailError : ""}
                     // onChange={(e) => setEmail(e.target.value)}
                     onChange={(e) => (
                        setEmail(e.target.value), setErrors({ ...errors, emailError: "" })
                     )}
                     value={email}
                     styles={{
                        height: "5.1rem",
                        borderRadius: "0.73rem",
                        font: "normal normal normal 1.6rem/2.2rem Inter",
                        padding: "0 0 0 1.5rem",
                        color: "#5A5A5A",
                        fontWeight: "300",
                        border: "none",
                        // margin: "0 0 1.5rem 0",
                        boxShadow: "0px 0px 4px #00000033",
                        width: "100%",
                     }}
                  />
               </FormGroup>
               <FormGroup>
                  <DropDownInput
                     styles={{
                        height: "5.1rem",
                        borderRadius: "0.73rem",
                        font: "normal normal normal 1.6rem/2.2rem Inter",
                        padding: "0 0 0 0.5rem",
                        color: "#5A5A5A",
                        fontWeight: "300",
                        border: "none",
                        boxShadow: "0px 0px 4px #00000033",
                        width: "100%",
                        marginTop: errors.emailError ? '20px' : '0'
                     }}
                     placeHolderStyles={true}
                     noLabel={true}
                     placeholder="Select your query type"
                     options={queryTypeOptions.map((item) => {
                        return { value: item.value, label: item.label };
                     })}
                     onChange={(e) => (setQueryType(e.value), setErrors({ ...errors, queryError: "" }))}
                  />
                  {errors.queryError && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '3px' }}>{errors.queryError}</p>}
               </FormGroup>
               <FormGroup>
                  <textarea
                     type="text"
                     id="query"
                     name="query"
                     placeholder="Write your query.."
                     className={styles.custominput}
                     style={{
                        height: "10.95rem",
                        width: "100%",
                        borderRadius: "0.73rem",
                        font: "normal normal normal 1.6rem/2.2rem Inter",
                        padding: "1.5rem 0 0 1.5rem",
                        color: "#5A5A5A",
                        fontWeight: "300",
                        border: "none",
                        boxShadow: "0px 0px 4px #00000033",
                        resize: "none",
                        marginTop: '5px',
                     }}
                     onChange={(e) => (
                        setMessage(e.target.value), setErrors({ ...errors, messageError: "" })
                     )}
                  />
                  {errors.messageError && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '0px' }}>{errors.messageError}</p>}
               </FormGroup>
               {/* <p
                             style={{
                                 margin: "2rem 0 0 0",
                                 // fontStyle: "normal",
                                 // fontVariant: "normal",
                                 // fontSize: "1rem",
                                 // lineHeight: "1.3rem",
                                 // fontFamily: "Poppins, sans-serif",
                                 color: "#767881",
                                 letterSpacing: "0%",
                         font: "normal normal normal 1.6rem/2.2rem Inter"
                             }}
                         >
                             {" "}
                             By submitting my details, I agree to QueueBuster's <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>
                         </p> */}
               <Button
                  onClick={() => apiCall()}
                  style={{
                     width: "100%",
                     margin: "0",
                     backgroundColor: "#3C69AF",
                     borderRadius: "6px",
                     border: "none",
                     height: "5.1rem",
                     font: "normal normal bold 1.6rem/2.2rem Inter",
                  }}
               >
                  Submit
               </Button>
            </Form>
         </div>
      </>
   );
};
// };

export default ContactUsForm;

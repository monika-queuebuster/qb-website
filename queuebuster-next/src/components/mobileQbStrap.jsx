import {
   inter_Bold,
   inter_Medium,
   inter_Regular,
   inter_semi_bold,
} from "../components/common/Fonts";
import { BlackCustomButton, BlueCustomButton, CustomButton, DropDownInput, TextInput, TransparentCustomButton } from "./qbStrap";
import styles from "../styles/mobileQbStrap.module.css";
import styles1 from "../styles/Industry/commonIndustry.module.css";
import { Input, Label } from "reactstrap";
import content from "../language/ENGLISH.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CountryCodeSelect } from "./phoneNoDropdown/phoneDropdown";
import { contactUsApi, getFreeDemo } from "@/services/signUpServices";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import VerificationPopup from "./modals/VerificationPopup";

const RecommendedHardware = (props) => {
   const { recommendedHardwareText, headingText } = props;
   return (
      <div style={{ margin: '2rem' }}>
         <div className={styles.section_heading}><h3>{headingText}</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/industries_hl.svg' alt='industries' fill /></div></div>
         <div
            style={{
               backgroundColor: "#86DBEA",
               padding: "0.5rem",
               textAlign: "center",
               borderRadius: "5px",
               marginTop: "1.6rem",
               marginBottom: "2.5rem",
            }}
         >
            QueueBuster functions flawlessly on all android POS devices.
         </div>
         {props.deviceData?.map((item) => {
            return (
               <div
                  style={{
                     display: "flex",
                     height: "27rem",
                     justifyContent: "space-between",
                     background: `${item.bgColor} 0% 0% no-repeat padding-box`,
                     position: "relative",
                  }}
               >
                  <div
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "flex-end",
                        paddingTop: "1rem",
                     }}
                  >
                     <div style={{ fontSize: "3rem", fontWeight: "700", paddingLeft: "1rem" }}>
                        {item.deviceSize}
                     </div>
                     <div
                        style={{
                           color: "#5A5A5A",
                           width: "22rem",
                           // fontSize: "1.41rem",
                           padding: "1rem",
                        }}
                     >
                        {item.suitableFor && (
                           <p className={inter_semi_bold.className} style={{ color: "#343434" }}>
                              {item.suitableFor}
                           </p>
                        )}
                        <p>{item.deviceContent}</p>
                     </div>
                  </div>
                  {item.deviceSize === "10.1”" ? (
                     <div style={{ position: "relative", height: "13rem", width: '25rem', left: "1rem", top: "6.8rem" }}>
                        <Image
                           src={item.sourceImage}
                           alt="pos devices"
                           fill
                        />
                     </div>
                  ) : item.deviceSize === "13.0”" ? (
                     <div style={{ position: "relative", height: "12rem", width: '23rem', left: "-1rem", top: "6rem" }}>
                        <Image
                           src={item.sourceImage}
                           alt="pos devices"
                           fill
                        />
                     </div>
                  ) : item.deviceSize === "8.0”" ? (
                     <div style={{ height: "15rem", width: '13rem', position: 'relative', top: "5rem" }}>
                        <Image src={item.sourceImage} alt="pos devices" fill />
                     </div>
                  ) : (
                        <div style={{ height: "25rem", width: '15rem', position: 'relative' }}>
                           <Image src={item.sourceImage} alt="pos devices" fill />
                        </div>
                     )}
               </div>
            );
         })}
         {/* <CustomButton
            styles={{
               color: "#2A6AB4",
               border: "transparent",
               backgroundColor: "#E4E8ED",
               height: "8rem",
               width: "100%",
               fontSize: "2rem",
               fontWeight: "700",
            }}
            text={"Checkout more devices"}
         /> */}
      </div>
   );
};

const ThreeSimpleSteps = () => {
   const {
      homePageOurRecomDownloadtheAppTitle,
      homePageOurRecomStepToDownloadTitle,
      homePageOurRecomStepToDownloadDesc,
      homePageOurRecomSignupforfreeTitle,
      homePageOurRecomSetupyourPOSTitle,
      homePageOurRecomSetupyourPOSDes,
      homePageOurRecomDownloadtheAppDesc,
      homePageOurRecomSignupforfreeDesc,
   } = content;
   const {
      startinjustthreesimplesteps,
      startinjustthreesimplestepsDesc,
      downloadtheApp,
      downloadtheAppDesc,
      signupforfree,
      signupforfreeDesc,
      setupyourPOS,
      setupyourPOSDesc,
   } = content.allInOne;
   const threeSteps = [
      {
         title: downloadtheApp,
         image: "/assets/downloadApp.svg",
         content: downloadtheAppDesc,
         altText: 'download app'
      },
      {
         title: signupforfree,
         image: "/assets/signupApp.svg",
         content: signupforfreeDesc,
         altText: 'signup'
      },
      {
         title: setupyourPOS,
         image: "/assets/setupApp.svg",
         content: setupyourPOSDesc,
         altText: 'setup'
      },
   ];
   return (
      <div style={{ padding: "2rem" }}>
         <div style={{ fontWeight: "700", fontSize: "2rem" }}>{startinjustthreesimplesteps}</div>
         <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
            {startinjustthreesimplestepsDesc}
         </div>
         <div>
            <video style={{ height: "100%", width: "100%" }} autoPlay loop muted playsInline>
               <source src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/Website+Video.mp4" />
            </video>
         </div>

         {threeSteps.map((item) => {
            return (
               <div style={{ display: "flex", paddingTop: "2rem", paddingBottom: "1.5rem" }}>
                  <div style={{ height: "8rem", width: "8rem", padding: "0 1.2rem 1.2rem 1.2rem", marginRight: '1.2rem', position: 'relative' }}>
                     <Image
                        src={item.image}
                        alt={item?.altText}
                        fill
                     />
                  </div>
                  <div>
                     <div style={{ fontWeight: "700", fontSize: "2rem" }}>{item.title}</div>
                     <div style={{ paddingTop: "1rem" }}>{item.content}</div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

const ContactUsMobile = () => {
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
      homePageGetInTouchWithUsTitle,
      commonPhoneNumber,
      commonEmailAddress,
      homePageReadyToGiveITAtryGmail,
      commonOfficeAddress,
      homePageOfficeAddressValue,
   } = content;
   const apiCall = () => {
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
      } else if (name && mobileNo && email && message) {
         let data = {
            countryCode: phoneCode,
            phone: mobileNo,
            name: name,
            email: email,
            message: message,
         };
         toast.promise(getFreeDemo(data, router), {
            loading: "Loading...",
            success: (data) => {
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
      <div className={styles.contactUsContainer}>
         <center>
            <div style={{ backgroundColor: "#eff6ff", padding: "3rem", borderRadius: "5px" }}>
               <h4 style={{ marginBottom: '10px', fontSize: '2.1rem' }}>Get in touch with our team.</h4>
               <TextInput
                  className={inter_Medium.className}
                  type="text"
                  noLabel={1}
                  placeholder="Name"
                  feedback={errors.nameError ? errors.nameError : ""}
                  feedbackStyles={{ textAlign: "left" }}
                  onChange={(e) => (
                     setName(e.target.value), setErrors({ ...errors, nameError: "" })
                  )}
                  value={name}
                  styles={{
                     border: "transparent",
                     width: "100%",
                     boxShadow: "0px 0px 4px #00000033",
                     marginBottom: errors.nameError ? '0.5rem' : '1rem',
                     height: "5rem",
                     borderRadius: " 5px",
                     paddingLeft: "1rem",
                     fontSize: '1.5rem'
                  }}
               />
               <div style={{ marginTop: errors.nameError ? '0.5rem' : '0' }}>
                  <CountryCodeSelect
                     width={"100%"}
                     height={"5rem"}
                     margin={"0"}
                     placeholder={"Mobile number"}
                     placeHolderStyles={true}
                     feedback={errors.mobileNoError ? errors.mobileNoError : ""}
                     feedbackStyles={{ textAlign: "left" }}
                     inputStyles={{
                        border: "transparent",
                        width: "100%",
                        fontSize: "1.5rem",
                        boxShadow: "0px 0px 4px #00000033",
                        // marginBottom: " 1rem",
                        height: "5rem",
                        borderRadius: "0 5px 5px 0",
                        paddingLeft: "1rem",
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
               <TextInput
                  className={inter_Medium.className}
                  type="text"
                  noLabel={1}
                  placeholder={commonEmailAddress}
                  feedbackStyles={{ textAlign: "left" }}
                  feedback={errors.emailError ? errors.emailError : ""}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={(e) => (
                     setEmail(e.target.value), setErrors({ ...errors, emailError: "" })
                  )}
                  value={email}
                  styles={{
                     border: "transparent",
                     width: "100%",
                     boxShadow: "0px 0px 4px #00000033",
                     marginBottom: errors.emailError ? '0.5rem' : '1rem',
                     height: "5rem",
                     borderRadius: " 5px",
                     paddingLeft: "1rem",
                     fontSize: '1.5rem',
                     marginTop: errors.mobileNoError ? '-0.5rem' : '0'
                  }}
               />
               <DropDownInput
                  styles={{
                     height: "5.1rem",
                     borderRadius: "0.73rem",
                     font: "normal normal normal 1.6rem/2.2rem Inter",
                     padding: "0",
                     color: "#5A5A5A",
                     fontWeight: "300",
                     border: "none",
                     boxShadow: "0px 0px 4px #00000033",
                     width: "100%",
                     marginBottom: errors.queryError ? '0.5rem' : '1rem',
                     marginTop: errors.emailError ? '5px' : '0',
                     fontSize: '1.5rem'
                  }}
                  placeHolderStyles={true}
                  noLabel={true}
                  placeholder="Select your query type"
                  options={queryTypeOptions.map((item) => {
                     return { value: item.value, label: item.label };
                  })}
                  onChange={(e) => (setQueryType(e.value), setErrors({ ...errors, queryError: "" }))}
               />
               {errors.queryError && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '0px', textAlign: 'left' }}>{errors.queryError}</p>}
               <textarea
                  type="text"
                  id="query"
                  name="query"
                  placeholder="Write your query."
                  className={styles.customTextArea}
                  style={{
                     border: "transparent",
                     width: "100%",
                     boxShadow: "0px 0px 4px #00000033",
                     marginBottom: errors.messageError ? '0' : '1rem',
                     height: "10rem",
                     borderRadius: " 5px",
                     padding: "1rem",
                     marginTop: errors.queryError ? '-5px' : '0',
                     fontSize: '1.5rem'
                  }}
                  onChange={(e) => (
                     setMessage(e.target.value), setErrors({ ...errors, messageError: "" })
                  )}
               />
               {errors.messageError && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '0px', textAlign: 'left' }}>{errors.messageError}</p>}
               {/* <input placeholder="Name" className={styles.inputContactMobile} /> */}
               {/* <input placeholder="Mobile Number" className={styles.inputContactMobile} /> */}
               {/* <input placeholder="E-mail Address" className={styles.inputContactMobile} /> */}
               {/* <textarea
                  placeholder="Please write us your query."
                  className={styles.inputContactMobile}
                  style={{ height: "10rem" }}
               ></textarea> */}
               <CustomButton
                  text={"Submit"}
                  onClick={() => apiCall()}
                  styles={{ width: "100%", backgroundColor: "#2A6AB4", border: "transparent" }}
               />
            </div>
         </center>

         <div style={{ fontWeight: "700", fontSize: "2rem", marginTop: '4rem', textAlign: 'center' }}>
            {/* {homePageGetInTouchWithUsTitle} */}

            Want to skip the form? <br /> Call us now!

         </div>
         <p style={{ textAlign: 'center' }}>
            {/* For <span className={inter_Bold.className}>Free Demo,</span> Call */}
            For product demo:
            {/* {commonPhoneNumber} */}
         </p>
         <h4 style={{ textAlign: 'center', fontSize: '2rem' }}><a href="tel:+91 78 76 180 180">+91 78 76 180 180</a></h4>
         <p style={{ textAlign: 'center' }}>
            {/* Or <span className={inter_Bold.className}>write to us</span> at */}
            Or write to us at:
            {/* {commonEmailAddress} */}
         </p>
         <h4 style={{ textAlign: 'center', fontSize: '2rem' }}>sales@queuebuster.co</h4>
         {/* <p>{commonOfficeAddress}</p> */}
         {/* <h2>{homePageOfficeAddressValue}</h2> */}
      </div>
   );
};

const MobileOurBenefits = (props) => {
   const { benefits } = props;
   return (
      <>
         {benefits.map((el) => {
            return (
               <div
                  style={{
                     display: "flex",
                     // border: "1px solid gray",
                     borderRadius: "10px",
                     paddingTop: "1rem",
                     paddingBottom: "1rem",
                     alignItems: "flex-start",
                     marginTop: "2rem",
                     boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
               >
                  <div
                     style={{
                        height: "6rem",
                        width: "6rem",
                        // backgroundColor: el.color,
                        borderRadius: "50%",
                        marginRight: "2rem",
                        marginLeft: "1rem",
                        display: "flex",
                        // alignItems: "center",
                     }}
                  >
                     <div style={{ height: "6rem", width: '6rem', position: 'relative' }} >
                        <Image src={el.img} alt={el?.altText} fill />
                     </div>
                  </div>
                  <div style={{ width: "65%" }}>
                     <h3
                        style={{
                           fontSize: "2rem",
                           fontWeight: "700",
                        }}
                     >
                        {el.title}
                     </h3>
                     <div>{el.content}</div>
                  </div>
               </div>
            );
         })}
      </>
   );
};

const MobileVacancyCard = (props) => {
   const { title, description, vacancyType, vacancyLocation, indx, id } = props;
   return (
      <div
         style={{
            // height: "22rem",
            width: "90%",
            border: "1px solid rgb(208 208 208)",
            borderRadius: "15px",
            padding: "1.5rem",
            margin: "auto",
            marginBottom: "3rem",
         }}
      >
         <div style={{ height: "65%", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
               {/* <div
                  style={{
                     height: "4.5rem",
                     width: "4.5rem",
                     backgroundColor: "#E5E5E5",
                     marginRight: "2.5rem",
                     borderRadius: "5px",
                  }}
               ></div> */}
               <h4 style={{ fontWeight: "600" }}>{title}</h4>
            </div>
            {/* <div style={{ marginTop: "1.5rem" }}>{description}</div> */}
         </div>
         {/* <div
            style={{ borderTop: "1px dashed #707070", borderStyle: "dashed", marginTop: "1.5rem" }}
         ></div> */}
         {/* <hr
            style={{
               border: "none",
               height: "0.06rem",
               background: "#000",
               background: `repeating-linear-gradient(90deg,#000,#000 0.7rem,transparent 0.6rem,transparent 1.4rem)`,
               marginTop: "1rem ",
            }}
         /> */}
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               height: "35%",
            }}
         >
            <div style={{ display: "flex" }}>
               <h2 style={{ marginRight: "2.5rem", fontWeight: "600" }}>{vacancyType}</h2>
               <div>{vacancyLocation}</div>
            </div>
            <CustomButton
               text={"Detail"}
               onClick={() => {
                  window.open(`https://queuebuster.keka.com/careers/jobdetails/${id}`);
               }}
               styles={{
                  backgroundColor: "#020D48",
                  borderRadius: "5px",
                  color: "#FFFFFF",
                  border: "2px solid #222222",
                  width: "8.4rem",
                  height: "4.2rem",
               }}
            />
         </div>
      </div>
   );
};

const KhataTopCard = (props) => {
   return (
      <div className={styles1.mainBoxIndustry}>
         <div
            style={{
               backgroundImage: props?.backgroundImage
                  ? `url(${props.backgroundImage})`
                  : "url(/assets/Khata/KhataHero.webp)",
               backgroundRepeat: "no-repeat",
               height: "33.5rem",
               width: "100%",
               backgroundSize: "cover",
               backgroundSize: "120vw",
               backgroundPosition: "-2rem -3rem",
               // position: relative;
            }}
         >
         </div>
         <h1 className={`${inter_Bold.className} ${styles1.mainTitle}`}>
            The simple way to{" "}
            <span style={{ color: props?.color ? props.color : "#7E9F3C" }}>manage</span> your{" "}
            <span style={{ color: props?.color ? props.color : "#7E9F3C" }}>credit sales</span>{" "}
         </h1>
         <p>
            We manage your point of sale and keep everything around your business up-to-date with
            our all-in-one POS App.
         </p>
         <div className={styles1.topCardBtns}>
            <CustomButton
               text="Get Free Demo"
               styles={{
                  backgroundColor: props?.color ? props.color : "#7E9F3C",
                  border: "none",
                  fontSize: "1.65rem",
                  fontWeight: "600",
               }}
               onClick={(e) => {
                  console.log(e);
               }}
            />
            <CustomButton
               text="Sign Up"
               styles={{
                  border: props?.color ? `2px solid ${props.color}` : "2px solid #7E9F3C",
                  fontWeight: "600",
                  color: props?.color ? props.color : "#7E9F3C",
               }}
            />
         </div>
         <img
            src="/assets/googlePlay.svg"
            alt="google play"
            className={styles1.googlePlayBtn}
            onClick={(e) => {
               console.log(e);
            }}
         />
      </div>
   );
};

const ContactUsCard = () => {
   const {
      formTitle,
      // firstName,
      firstNamePlaceHolder,
      // lastName,
      lastNamePlaceholder,
      // emailAddress,
      emailAddressPlaceholder,
      // phoneNumber,
      phoneNumberPlaceholder,
      // selectBusinessType,
      // companyName,
      companyNamePlaceholder,
   } = content.contact;
   const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
   ];
   const [fullname, setFullName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [phoneCode, setPhoneCode] = useState(91);
   const [country, setCountry] = useState("India");
   const [email, setEmail] = useState("");
   const [queryType, setQueryType] = useState('');
   const [query, setQuery] = useState('');
   const [errors, setErrors] = useState({
      fullNameError: "",
      // phoneNumberError: "",
      emailError: "",
      queryError: ""
   });
   const router = useRouter();
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

   const validate = () => {
      const storedSource = localStorage.getItem("sources");
      if (!fullname) {
         setErrors({ ...errors, fullNameError: "First name is required" });
         return false;
      } else if (!phoneNumber) {
         setErrors({ ...errors, phoneNumberError: "Phone number is required" });
         return false;
      } else if (!email) {
         setErrors({ ...errors, emailError: "Email is required" });
         return false;
      } else if (!queryType) {
         setErrors({ ...errors, queryError: "Please select query type" })
      } else if (fullname && email && queryType) {
         let data = {
            countryCode: phoneCode,
            phone: phoneNumber,
            name: fullname,
            // country: country,
            email: email,
            queryType: queryType,
            message: query,
            source: storedSource && JSON.parse(storedSource)
         };
         toast.promise(contactUsApi(data, router), {
            loading: "Loading...",
            success: (data) => {
               localStorage.removeItem("sources")
               return `${data}`;
            },
            error: (data) => {
               return `${data}`;
            },
         });
      }
      return false;
   };

   useEffect(() => {
      if (phoneNumber > 0) {
         setErrors({ ...errors, phoneNumberError: "" });
      }
   }, [phoneNumber]);
   return (
      <div
         style={{ width: "100%", marginTop: "3rem", padding: "2rem" }}
         className={styles.cardMobile}
      >
         <h2 style={{ fontWeight: "700", fontSize: "2.5rem" }} className={inter_Regular}>
            {formTitle}
         </h2>
         <div style={{ paddingTop: "2rem" }}>
            <TextInput
               className={inter_Medium.className}
               type="text"
               label={"Full Name"}
               feedback={errors.fullNameError ? errors.fullNameError : ""}
               onChange={(e) => (
                  setFullName(e.target.value), setErrors({ ...errors, fullNameError: "" })
               )}
               value={fullname}
               placeholder={'Enter your full name'}
               req={true}
               styles={{ height: "4rem", labelSize: "1.7rem", width: "100%" }}
            />
         </div>
         <div style={{ paddingTop: "2rem" }}>
            <TextInput
               className={inter_Medium.className}
               type="text"
               label={"Email Address"}
               feedback={errors.emailError ? errors.emailError : ""}
               onChange={(e) => (
                  setEmail(e.target.value), setErrors({ ...errors, emailError: "" })
               )}
               value={email}
               placeholder={"Enter your email"}
               req={true}
               styles={{ height: "4rem", labelSize: "1.7rem", width: "100%" }}
            />
         </div>
         <div style={{ paddingTop: "2rem" }}>
            <div>
               <Label
                  style={{
                     fontSize: "1.7rem",
                     color: "black",
                  }}
               >
                  Mobile number *
               </Label>
               <CountryCodeSelect
                  width={"100%"}
                  height={"4rem"}
                  margin={"0"}
                  req={true}
                  placeholder={"Mobile number"}
                  placeHolderStyles={true}
                  feedback={errors.phoneNumberError ? errors.phoneNumberError : ""}
                  inputStyles={{ margin: 0, fontSize: "1.65rem" }}
                  onChange={(value) => {
                     setCountry(value.country);
                     setPhoneCode(value.phoneCode);
                     setPhoneNumber(value.phoneNumber);
                  }}
                  value={phoneNumber}
               />
               <div style={{ marginBottom: 0 }}>
                  <div
                     style={{
                        marginTop: "8px",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1.83,
                        letterSpacing: "-0.26px",
                        color: "#ff3636",
                        height: "fit-content",
                        display: "block",
                        width: "100%",
                     }}
                  ></div>
                  <div
                     style={{
                        marginTop: "8px",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: 1.83,
                        letterSpacing: "-0.26px",
                        color: "#ff3636",
                        height: "fit-content",
                        display: "block",
                        width: "100%",
                     }}
                  ></div>
               </div>
            </div>
         </div>
         <div style={{ margin: '1.6rem 0' }}>
            <DropDownInput
               styles={{
                  height: "5.1rem",
                  borderRadius: "5px",
                  font: "normal normal normal 1.6rem/2.2rem Inter",
                  padding: "0 0 0 0.5rem",
                  color: "#5A5A5A",
                  fontWeight: "300",
                  border: "1px solid #ced4da",
                  width: "100%",
                  labelMargin: '1rem',
                  labelSize: '1.6rem'
               }}
               placeHolderStyles={true}
               label={'Query Type *'}
               placeholder="Select your query type"
               options={queryTypeOptions.map((item) => {
                  return { value: item.value, label: item.label };
               })}
               onChange={(e) => (setQueryType(e.value), setErrors({ ...errors, queryError: "" }))}
            />
            {errors.queryError && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '3px' }}>{errors.queryError}</p>}
         </div>

         <div>
            <Label
               style={{
                  fontSize: "1.65rem",
                  color: "black",
               }}
            >
               Query
            </Label>

            <textarea
               type="text"
               id="query"
               name="query"
               placeholder="Type your query..."
               className={styles.custominput}
               style={{
                  height: "10.95rem",
                  width: "100%",
                  borderRadius: "0.73rem",
                  font: "normal normal normal 1.6rem/2.2rem Inter",
                  padding: "1.5rem 0 0 1.5rem",
                  color: "#5A5A5A",
                  fontWeight: "300",
                  border: "1px solid #ced4da",
                  resize: "none",
                  marginTop: '5px',
               }}
               onChange={(e) => (
                  setQuery(e.target.value)
               )}
            />
         </div>
         <CustomButton
            text={"Submit"}
            onClick={() => validate()}
            styles={{
               width: "100%",
               marginTop: "3.2rem",
               backgroundColor: "#2A6AB4",
               border: "transparent",
            }}
         />
      </div>
   );
};

const OfficeDetails = () => {
   return (
      <div
         style={{ width: "100%", marginTop: "3rem", padding: "2rem" }}
         className={styles.cardMobile}
      >
         <div>
            <h3 className={inter_Bold.className}>
               <div style={{
                  display: "inline-block",
                  height: "2.263rem",
                  width: '3rem',
                  position: 'relative',
                  top: '0.5rem'
               }} >
                  <Image
                     src="/assets/location.svg"
                     alt="location"
                     fill
                  />
               </div>
               Office Address:
            </h3>
            <p>
               Unit No. 401, 4th Floor, Pegasus One Tower,
               <br /> Plot No. A-10, Sector - 68, Noida, <br /> Uttar Pradesh-201307
            </p>
         </div>
         <div>
            <h3 className={inter_Bold.className}>
               <div style={{
                  display: "inline-block",
                  height: "2.263rem",
                  width: '3rem',
                  position: 'relative',
                  top: '0.5rem',
                  marginRight: '0.8rem'
               }} >
                  <Image
                     src="/assets/contact.svg"
                     alt="email"
                     fill
                  />
               </div>
               E-mail Address:
            </h3>
            <p>sales@queuebuster.co</p>
         </div>
         <div>
            <h3 className={inter_Bold.className}>
               <div style={{
                  display: "inline-block",
                  height: "2rem",
                  width: '2rem',
                  position: 'relative',
                  top: '0.5rem',
                  marginRight: '0.8rem'
               }} >
                  <Image
                     src="/assets/phone.svg"
                     alt="contact"
                     fill
                  />
               </div>
               Contact Us
            </h3>
            <p style={{ marginBottom: "0.2rem" }} className={styles.contactUsFooter}>
               <span style={{ color: "#343434" }} className={inter_Bold.className}>
                  Sales :
               </span>
               <span><a href="tel:+91 78 76 180 180">+91 78 76 180 180</a></span>
            </p>
            <p style={{ marginBottom: "0rem" }} className={styles.contactUsFooter}>
               <span style={{ color: "#343434" }} className={inter_Bold.className}>
                  Support :
               </span>
               <span><a href="tel:+91 78 61 044 000">+91 78 61 044 000</a></span>
            </p>
         </div>
      </div>
   );
};

const MobileMemberCard = (props) => {
   return (
      <div
         style={{
            padding: "2rem 1.3rem",
            display: "flex",
            border: "0.1rem solid #f1f1f1",
            borderRadius: "1.5rem",
            ...props.styles,
         }}
      >
         {/* <div
            style={{ height: "8rem", width: "8rem", borderRadius: "10px", backgroundColor: "grey" }}
         > */}
         <img
            src={props.image}
            alt="member card"
            style={{
               height: props.desktop ? "11.68rem" : "8rem",
               width: props.desktop ? "11.68rem" : "8rem",
               borderRadius: "10px",
               backgroundImage: "url(/assets/AboutUs/ourTeamBG.svg)",
               margin: "0",
            }}
         />
         {/* </div> */}
         <div style={{ paddingLeft: "1.5rem" }}>
            <h2
               style={{
                  font: "normal normal bold 1.898rem/2.336rem Inter",
                  marginBottom: "0.7rem",
               }}
            >
               {props.name}
            </h2>
            <p style={{ marginBottom: "0", font: "normal normal normal 1.606rem/1.898rem Inter" }}>
               {props.designation}
            </p>
            <div style={{ display: "flex", margin: "0.9rem 0 0 0" }}>
               <a href={props.linkedin} target={"_blank"}>
                  <img
                     style={{ height: props.desktop ? "1.75rem" : "1.5rem", margin: "0 1rem 0 0" }}
                     src="/assets/linkdin.svg"
                     alt="linkdin"
                  />
               </a>
               <a href="https://twitter.com/QueueBusterPOS" target={"_blank"}>
                  <img
                     style={{ height: "1.5rem", margin: "0 1rem 0 0" }}
                     src="/assets/twitter.svg"
                     alt="twitter"
                  />
               </a>
               <a href="https://www.facebook.com/queuebuster/" target={"_blank"}>
                  <img
                     style={{ height: "1.5rem", margin: "0 1rem 0 0" }}
                     src="/assets/fb.svg"
                     alt="fb"
                  />
               </a>
               <a href="https://www.instagram.com/queuebuster_pos/" target={"_blank"}>
                  <img
                     style={{ height: "1.5rem", margin: "0 1rem 0 0" }}
                     src="/assets/instagram.svg"
                     alt="instagram"
                  />
               </a>
            </div>
         </div>
      </div>
   );
};

const MobileIntegrationsCard = (props) => {
   const { url, title, description } = props;
   return (
      <div style={{ display: "flex", gap: "1.5rem" }}>
         <div
            style={{
               height: "6rem",
               boxShadow: "5px 0px 10px #9a999929",
               padding: "1rem",
               borderRadius: "1rem",
            }}
         >
            <div style={{ height: "5rem", width: "10rem", position: "relative" }}>
               <Image src={props.url} alt="payment" fill />
            </div>
         </div>
         <div>
            <div
               style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "0.8rem",
               }}
            >
               {props.title}
            </div>
            <div style={{ color: "#5A5A5A", fontSize: "1.5rem", marginBottom: "1rem" }}>
               {props.description}
            </div>
            {/* <div style={{ color: "#2A6AB4", fontWeight: "700", marginTop: "1rem" }}>Know More</div> */}
         </div>
      </div>
   );
};

const BusinessSuperAppMobile = () => {
   const leftIconsData = [
      {
         image: "/assets/AllInOne/quickBill.svg",
         title: "Quick Bill",
         altText: 'quick bill'
      },
      {
         image: "/assets/AllInOne/billing.svg",
         title: "Billing",
         altText: 'billing'
      },
      {
         image: "/assets/AllInOne/khata.svg",
         title: "Khata (Digital Ledger)",
         altText: 'khata'
      },
      {
         image: "/assets/AllInOne/khata.svg",
         title: "CRM & Loyalty",
         altText: 'crm loyalty'
      },
      {
         image: "/assets/AllInOne/ebilling.svg",
         title: "E-way Billing",
         altText: 'ebilling'
      },
   ];
   const rightIconsData = [
      {
         image: "/assets/AllInOne/estore.svg",
         title: "eStore",
         altText: 'estore'
      },
      {
         image: "/assets/AllInOne/einvoicing.svg",
         title: "E-Invoicing",
         altText: 'einvoicing'
      },
      {
         image: "/assets/AllInOne/reporting.svg",
         title: "Reporting",
         altText: 'reporting'
      },
      {
         image: "/assets/AllInOne/digitalPayments.svg",
         title: "Digital Payments",
         altText: 'digital payments'
      },
      {
         image: "/assets/AllInOne/inventoryManagement.svg",
         title: "Inventory Management",
         altText: 'inventory management'
      },
   ];
   return (
      <div>
         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontWeight: "700", fontSize: "3.5rem" }}>All in one POS</h2>
            <div style={{ fontSize: "3.5rem" }}>Business Super App</div>
         </div>
         <center>
            <div style={{ position: "relative", height: "30rem" }}>
               <div style={{ height: "27rem", width: "16rem", zIndex: "1", position: "absolute", left: "8.5rem" }}>
                  <Image
                     src="/assets/AllInOne/LeftMobile.webp"
                     alt="left mobile"
                     fill
                  />
               </div>
               <div style={{ height: "27rem", width: "15rem", left: "16.5rem", position: "absolute", top: "-1rem" }}>
                  <Image
                     src="/assets/AllInOne/RightMobile.webp"
                     alt="right mobile"
                     fill
                  />
               </div>
            </div>
         </center>
         <div style={{ display: "flex", marginLeft: "2rem" }}>
            <div style={{ flex: "1" }}>
               {leftIconsData.map((item) => {
                  return (
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "1rem",
                           marginBottom: "2rem",
                        }}
                     >
                        <div style={{ height: "3.3rem", width: '3.3rem', position: 'relative' }} >
                           <Image src={item.image} alt={item?.altText} fill />
                        </div>
                        <div
                           style={{
                              fontSize: "1.8rem",
                              color: "var(--lightBlack)",
                              width: "10rem",
                           }}
                        >
                           {item.title}
                        </div>
                     </div>
                  );
               })}
            </div>
            <div style={{ flex: "1" }}>
               {rightIconsData.map((item) => {
                  return (
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "1rem",
                           marginBottom: "2rem",
                        }}
                     >
                        <div style={{ height: "3.3rem", width: '3.3rem', position: 'relative' }} >
                           <Image src={item.image} alt={item?.altText} fill />
                        </div>
                        <div
                           style={{
                              fontSize: "1.8rem",
                              color: "var(--lightBlack)",
                              width: "10rem",
                           }}
                        >
                           {item.title}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

const HelpAndSupportCardMobile = (props) => {
   return (
      <div
         style={{
            width: "90%",
            height: "14rem",
            padding: "1rem",
            border: "1px solid #707070",
            borderRadius: "8px",
         }}
      >
         <div style={{ height: "2.3rem", width: '2.3rem', position: 'relative' }}>
            <Image src={props.data.img} alt="signup" fill />
         </div>
         <div style={{ fontWeight: "600", fontSize: "1.8rem", marginTop: "0.8rem" }}>
            {props.data.heading}
         </div>
         <div style={{ fontSize: "1.2rem", color: "#222222", marginTop: "0.5rem" }}>
            {props.data.desc}
         </div>
      </div>
   );
};

const LoginCard = () => {
   return (
      <div>
         <div
            style={{
               width: "100%",
               padding: "2rem 2rem 0 2rem",
               border: "1px solid back",
            }}
            className={styles.loginCardMobile}
         >
            <div style={{ font: "normal normal bold 1.5rem/2.4rem Inter" }}>
               Please enter your credentials to login
            </div>
            <div style={{ paddingTop: "2rem" }}>
               <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label="Username"
                  placeholder="Enter your username"
                  //    req={true}
                  styles={{
                     height: "4rem",
                     labelSize: "1.7rem",
                     width: "100%",
                     // border: "1px solid #000000",
                  }}
               />
            </div>
            <div style={{ paddingTop: "2rem" }}>
               <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label="Password"
                  placeholder="Enter your password"
                  //    req={true}
                  styles={{
                     height: "4rem",
                     labelSize: "1.7rem",
                     width: "100%",
                     // border: "1px solid #000000",
                  }}
               />
            </div>
            <div style={{ display: "flex", margin: "3rem auto", marginTop: "3rem" }}>
               <div style={{ width: "49%", marginRight: "5%" }}>
                  <CustomButton
                     text={"Login"}
                     styles={{ backgroundColor: "#2A6AB3", border: "transparent" }}
                  />
               </div>
               <div style={{ width: "49%" }}>
                  <CustomButton
                     text={"Forgot Password"}
                     styles={{
                        color: "#2A6AB3",
                        border: "1px solid #2A6AB3",
                        borderRadius: "5px",
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

const ResetPasswordCard = () => {
   return (
      <div>
         <div
            style={{
               width: "100%",
               padding: "2rem 2rem 0 2rem",
               border: "1px solid back",
            }}
            className={styles.loginCardMobile}
         >
            <div style={{ font: "normal normal bold 1.5rem/2.4rem Inter" }}>Reset Password</div>
            <div style={{ fontSize: "1.2rem", lineHeight: "1.6rem", paddingTop: "1rem" }}>
               <div>Enter the username for which </div>
               <div>you would like to reset the password</div>
            </div>
            <div style={{ paddingTop: "2rem" }}>
               <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label="Username"
                  placeholder="Enter your username"
                  //    req={true}
                  styles={{
                     height: "4rem",
                     labelSize: "1.7rem",
                     width: "100%",
                     // border: "1px solid #000000",
                  }}
               />
            </div>
            <div style={{ paddingTop: "2rem" }}>
               <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label="Password"
                  placeholder="Enter your password"
                  //    req={true}
                  styles={{
                     height: "4rem",
                     labelSize: "1.7rem",
                     width: "100%",
                     // border: "1px solid #000000",
                  }}
               />
            </div>
            <div style={{ display: "flex", margin: "3rem auto", marginTop: "3rem" }}>
               <div style={{ width: "49%", marginRight: "5%" }}>
                  <CustomButton
                     text={"Proceed"}
                     styles={{ backgroundColor: "#2A6AB3", border: "transparent" }}
                  />
               </div>
               <div style={{ width: "49%" }}>
                  <CustomButton
                     text={"Back To Login"}
                     styles={{
                        color: "#2A6AB3",
                        border: "1px solid #2A6AB3",
                        borderRadius: "5px",
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

const ResetPasswordOtpCard = () => {
   return (
      <div>
         <div
            style={{
               width: "100%",
               padding: "2rem 2rem 0 2rem",
               border: "1px solid back",
            }}
            className={styles.loginCardMobile}
         >
            <div style={{ font: "normal normal bold 1.5rem/2.4rem Inter" }}>Reset Password</div>
            <div style={{ fontSize: "1.2rem", lineHeight: "1.6rem", paddingTop: "1rem" }}>
               <div>
                  An OTP has been shared with you on your registered email address. Please input it
                  below.
               </div>
            </div>
            <div style={{ paddingTop: "2rem" }}>
               <Input
                  className={styles.reactStrapInput}
                  type={"text"}
                  onChange={(e) => {
                     console.log(e.target.value);
                     // props.onChange ? props.onChange(e) : "";
                  }}
                  style={{
                     width: "100%",
                     height: "4rem",
                     padding: "0 0 0 1.5rem",
                     fontSize: "2rem",
                  }}
                  placeholder={"Enter OTP"}
               />
            </div>
            <div style={{ display: "flex", margin: "3rem auto", marginTop: "3rem" }}>
               <div style={{ width: "49%", marginRight: "5%" }}>
                  <CustomButton
                     text={"Verify"}
                     styles={{ backgroundColor: "#2A6AB3", border: "transparent" }}
                  />
               </div>
               <div style={{ width: "49%" }}>
                  <CustomButton
                     text={"Back To Login"}
                     styles={{
                        color: "#2A6AB3",
                        border: "1px solid #2A6AB3",
                        borderRadius: "5px",
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

const ResetPasswordAfterOtp = () => {
   return (
      <div>
         <div
            style={{
               width: "100%",
               padding: "2rem 2rem 0 2rem",
               border: "1px solid back",
            }}
            className={styles.loginCardMobile}
         >
            <div style={{ font: "normal normal bold 1.5rem/2.4rem Inter" }}>Reset Password</div>
            <div style={{ fontSize: "1.2rem", lineHeight: "1.6rem", paddingTop: "1rem" }}>
               <div>We highly recommend you to create</div>
               <div>a unique password.</div>
            </div>
            <div style={{ paddingTop: "2rem" }}>
               <Input
                  className={styles.reactStrapInput}
                  type={"text"}
                  onChange={(e) => {
                     console.log(e.target.value);
                     // props.onChange ? props.onChange(e) : "";
                  }}
                  style={{
                     width: "100%",
                     height: "4rem",
                     padding: "0 0 0 1.5rem",
                     fontSize: "2rem",
                  }}
                  placeholder={"Enter New Password"}
               />
               <div style={{ paddingTop: "1.5rem" }}>
                  <Input
                     className={styles.reactStrapInput}
                     type={"text"}
                     onChange={(e) => {
                        console.log(e.target.value);
                        // props.onChange ? props.onChange(e) : "";
                     }}
                     style={{
                        width: "100%",
                        height: "4rem",
                        padding: "0 0 0 1.5rem",
                        fontSize: "2rem",
                     }}
                     placeholder={"Re-Enter New Password"}
                  />
               </div>
            </div>
            <div style={{ display: "flex", margin: "3rem auto", marginTop: "3rem" }}>
               <div style={{ width: "49%", marginRight: "5%" }}>
                  <CustomButton
                     text={"Verify"}
                     styles={{ backgroundColor: "#2A6AB3", border: "transparent" }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

const FooterBtns = () => {
   const [demoModal, setDemoModal] = useState(false);
   const [formHeading, setHeading] = useState("Book your free demo now!")

   const router = useRouter();
   return (
      <>
         <VerificationPopup isOpen={demoModal} closeModal={() => setDemoModal(false)} formHeading={formHeading} />
         <div className={styles.footer_btn_container}>
            <CustomButton
               text={"Try It Free"}
               styles={{
                  backgroundColor: "#000",
                  border: "none",
                  fontSize: "1.5rem",
                  fontWeight: "600",
               }}
               onClick={() => (setDemoModal(true), setHeading("Book your free demo now!"))}
            />

            <TransparentCustomButton text={"Contact Sales"} style={{ padding: "0 2rem", width: "45%" }} onClick={() => router.push('/contact-sales')} />
         </div>
      </>
   )
}

const GdnvFooterBtn = () => {
   const handleScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
         behavior: "smooth",
      });
   };

   return (
      <div className={styles.gdnv_btn}>
         <Link href='#demoRequestContainer' onClick={(e) => handleScroll(e)} style={{ width: "100%" }}>
            <BlueCustomButton text="I’m Interested" style={{ padding: "0 2rem", width: '90% !important' }} />
         </Link>
      </div>
   )
}

export {
   RecommendedHardware,
   ThreeSimpleSteps,
   ContactUsMobile,
   MobileOurBenefits,
   MobileVacancyCard,
   KhataTopCard,
   ContactUsCard,
   OfficeDetails,
   MobileMemberCard,
   MobileIntegrationsCard,
   BusinessSuperAppMobile,
   HelpAndSupportCardMobile,
   LoginCard,
   ResetPasswordCard,
   ResetPasswordOtpCard,
   ResetPasswordAfterOtp,
   FooterBtns,
   GdnvFooterBtn
};

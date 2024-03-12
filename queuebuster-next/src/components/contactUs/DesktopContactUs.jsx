import React, { useState, useEffect } from 'react'
import styles from '../../styles/ContactPage/contact.module.css';
import Image from 'next/image';
import { BlueCustomButton, DropDownInput, TextInput } from '../qbStrap';
import { inter_Medium } from '../common/Fonts';
import { Label } from 'reactstrap';
import { CountryCodeSelect } from '../phoneNoDropdown/phoneDropdown';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import { contactUsApi } from '@/services/signUpServices';
import { blogData } from '@/constants/common';
import Link from 'next/link';
import RatingSlider from './RatingSlider';
import content from '../../language/ENGLISH.json'


const DesktopContactUs = () => {

   const [fullname, setFullName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [phoneCode, setPhoneCode] = useState(91);
   const [country, setCountry] = useState("India");
   const [email, setEmail] = useState("");
   const [queryType, setQueryType] = useState('');
   const [query, setQuery] = useState('');
   const [errors, setErrors] = useState({
      fullNameError: "",
      lastNameError: "",
      phoneNumberError: "",
      emailError: "",
      queryError: "",
   });
   const router = useRouter();

   const validate = () => {
      const storedSource = localStorage.getItem("sources");
      var EMAIL_VALIDATION_REGEX =
         /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

      if (!fullname) {
         setErrors({ ...errors, fullNameError: "Name is required" });
         return false;
      } else if (!email) {
         setErrors({ ...errors, emailError: "Email is required" });
         return false;
      } else if (email.match(EMAIL_VALIDATION_REGEX) == null) {
         setErrors({ ...errors, emailError: "Please enter a vaild email" });
         return false;
      } else if (!queryType) {
         setErrors({ ...errors, queryError: "Please select query type" })
      } else if (fullname && email && queryType && !errors?.phoneNumberError) {
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

   useEffect(() => {
      if (phoneNumber?.length > 10) {
         setErrors({ ...errors, phoneNumberError: "Enter a valid number" });
      }
      else {
         setErrors({ ...errors, phoneNumberError: "" });
      }
   }, [phoneNumber]);

   const { headingText1, letsConnectText, pageDesc, phoneNumberText, salesText, supportText, emailAddressText, officeAddressText, getInTouchHeading, moreThanPOSHeading, businessNeedsText, merchantsText, integrationText, countriesText, invoicesGenerated, insightsToGrowText } = content.contact
   const { commonReadMore } = content

   return (
      <>
         <div className={styles.hero_section}>
            <div className={styles.text_section}>
               <h1 className={styles.hero_section_heading}>{headingText1} <br /><span className={styles.blue_text}>{letsConnectText}</span></h1>
               <p className={`${styles.page_desc} ${styles.body_text}`}>{pageDesc}</p>
            </div>
            <div className={styles.image_section}>
               <div className={styles.hero_img}><Image src="https://quebuster.s3.ap-south-1.amazonaws.com/website/assets/Contactus_b1.png" alt="onboarding support" fill /></div>
            </div>
         </div>

         <div className={styles.blue_card_section}>
            <div>
               <div className={styles.blue_card_icon}><Image src="/assets/ContactPage/phone.svg" alt='phone icon' fill /></div>
               <div>
                  <h3 className={styles.blue_card_title}>{phoneNumberText}</h3>
                  <p className={styles.blue_card_content}>{salesText} : <b>+91 78 76 180 180</b></p>
                  <p className={styles.blue_card_content}>{supportText} : <b>+91 78 61 044 000</b></p>
               </div>
            </div>
            <div>
               <div className={styles.blue_card_icon}><Image src="/assets/ContactPage/email.svg" alt='email icon' fill /></div>
               <div>
                  <h3 className={styles.blue_card_title}>{emailAddressText}</h3>
                  <p className={styles.blue_card_content}><b>sales@queuebuster.co</b></p>
               </div>
            </div>
            <div>
               <div className={styles.blue_card_icon}><Image src="/assets/ContactPage/map.svg" alt='map icon' fill /></div>
               <div>
                  <h3 className={styles.blue_card_title}>{officeAddressText}</h3>
                  <p className={styles.blue_card_content}>Unit No. <b>401, 4th Floor, Pegasus One Tower,</b><br /> Plot No. A-10, Sector - 68,<br /> Noida, Uttar Pradesh - 201307</p>
               </div>
            </div>
         </div>

         <div className={styles.form_section}>
            <div style={{ width: "fit-content", margin: "auto" }}>
               <h2 className={styles.section_heading}>{getInTouchHeading}</h2>
               <div className={styles.stroke_container}><Image src="/assets/ContactPage/features_stroke.svg" alt="storke" fill /></div>
            </div>
            <div style={{ display: "flex" }}>
               <div style={{ paddingRight: "9.3rem", borderRight: "1px solid #5a5a5a30", width: "50%" }}>
                  <h4 className={styles.section_heading}>{moreThanPOSHeading}</h4>
                  <p className={styles.body_text} style={{ marginBottom: "2.8rem" }}>{businessNeedsText}</p>

                  <div className={styles.colorful_grid}>
                     <div style={{ backgroundColor: "#8AE4F626" }}>
                        <h4 className={styles.grid_numbers}>65,000+</h4>
                        <p className={styles.grid_name}>{merchantsText}</p>
                     </div>
                     <div style={{ backgroundColor: "#F8D37826" }}>
                        <h4 className={styles.grid_numbers}>50+</h4>
                        <p className={styles.grid_name}>{integrationText}</p>
                     </div>
                     <div style={{ backgroundColor: "#EEC9FF26" }}>
                        <h4 className={styles.grid_numbers}>4+</h4>
                        <p className={styles.grid_name}>{countriesText}</p>
                     </div>
                     <div style={{ backgroundColor: "#EAFFF8" }}>
                        <h4 className={styles.grid_numbers}>1.7M+</h4>
                        <p className={styles.grid_name}>{invoicesGenerated}</p>
                     </div>
                  </div>

                  <RatingSlider />
               </div>

               {/* -------form-------- */}
               <div style={{ paddingLeft: "5rem", width: "50%" }}>
                  <div style={{ marginBottom: '2.5rem' }}>
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
                        styles={{ labelSize: "1.7rem", width: "100%" }}
                     />
                  </div>
                  <div className={styles.contactInputDiv1}>
                     <div style={{ width: "50%" }}>
                        <TextInput
                           className={inter_Medium.className}
                           type="text"
                           label={"Email Address"}
                           feedback={errors.emailError ? errors.emailError : ""}
                           onChange={(e) => (
                              setEmail(e.target.value), setErrors({ ...errors, emailError: "" })
                           )}
                           value={email}
                           placeholder={"Enter your email address"}
                           req={true}
                           styles={{ width: "100%" }}
                        />
                     </div>
                     <div style={{ width: "50%" }}>
                        <Label
                           style={{
                              fontSize: "1.8rem",
                              color: "black",
                              marginBottom: "1.5rem"
                           }}
                        >
                           Mobile number
                        </Label>
                        <CountryCodeSelect

                           height={"5.1rem"}
                           margin={"0"}
                           req={true}
                           placeHolderStyles={true}
                           placeholder={"Mobile number"}
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

                  <div style={{ marginBottom: '2rem' }}>
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
                           labelMargin: '1.5rem'
                        }}
                        req={true}
                        placeHolderStyles={true}
                        label={'Query Type'}
                        placeholder="Select your query type"
                        options={queryTypeOptions.map((item) => {
                           return { value: item.value, label: item.label };
                        })}
                        onChange={(e) => (setQueryType(e.value), setErrors({ ...errors, queryError: "" }))}
                     />
                     {errors.queryError && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '3px' }}>{errors.queryError}</p>}
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                     <Label
                        style={{
                           fontSize: "1.8rem",
                           color: "black",
                           marginBottom: "1rem"
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

                  <div>
                     <BlueCustomButton
                        text={"Submit"}
                        style={{ padding: "0 2rem" }}
                        onClick={() => validate()}
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.map_container}>
            <iframe
               loading="lazy"
               className={styles.maps}
               src={`https://www.google.com/maps/embed/v1/place?q=QueueBuster&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=18`}
               title="Map"
            ></iframe>
         </div>

         <div className={styles.insights_section}>
            <div style={{ width: "fit-content", margin: "auto" }}>
               <h3 className={styles.section_heading}>{insightsToGrowText}</h3>
               <div className={styles.stroke_container}><Image src="/assets/ContactPage/features_stroke.svg" alt="storke" fill /></div>
            </div>

            <div className={styles.blog_data_container}>
               {
                  blogData?.map((ele) => {
                     return (
                        <div key={ele?.id} className={styles.blog_card}>
                           <div className={styles.blog_img_container}>
                              <Image src={ele?.img} alt={ele?.title} fill />
                              <div className={styles.date_container}>{ele?.date}</div>
                           </div>
                           {/* <div className={styles.date_container}>{ele?.date}</div> */}
                           <div className={styles.blog_body}>
                              <h4>{ele?.title}</h4>
                              <p>{ele?.desc}</p>
                              <Link href={ele?.link}>{commonReadMore}</Link>
                           </div>
                        </div>
                     )
                  })
               }
            </div>

            <div style={{ margin: "4rem 0", display: 'flex', justifyContent: 'center' }}><BlueCustomButton text="View More Insights" onClick={() => { router.push("https://blog.queuebuster.co/") }} style={{ padding: "0 2rem" }} /></div>
         </div>

      </>
   )
}

export default DesktopContactUs
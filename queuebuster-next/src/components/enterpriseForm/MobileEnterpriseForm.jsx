import React, { useEffect, useState } from 'react'
import styles from "@/styles/QueryForm/queryForm.module.css";
import {
  inter_Bold,
  inter_Medium,
  inter_Regular,
} from "@/components/common/Fonts";
import {
  CustomButton,
  DropDownInput,
  MarqueeComponent,
  TextInput,
} from "@/components/qbStrap";
import { CountryCodeSelect } from "../phoneNoDropdown/phoneDropdown";
import { FormGroup, Input, Label } from "reactstrap";
import content from "../../language/ENGLISH.json";
import { MobileOurPartners } from '../homePage/MobileOurPartners';
import { toast } from "sonner";
import { enterpriseFormApi } from '@/services/signUpServices';
import { useRouter } from 'next/router';
import { useBusinessContext } from '@/services/BuisnessTypeContext';
import Link from 'next/link';
import { ClientsArr1, ClientsArr2, ClientsArr3, testimonialData, videoTestimonial } from '@/constants/common';
import VerificationForm from '../common/VerificationForm';
import MobileTestimonialSection from '../common/MobileTestimonialSection';

const MobileQueryForm = ({ usedIn, verified }) => {

  const { homePageOurClientTitle, homePageOurClientDes, commonOurPartners, homePageOurPartnerdesc } = content;
  const { desc1, desc2, desc3, desc4 } = content.testimonial;
  const { contactOurSalesTeam, completeTheForm, OurProductExperts, iAgree, privacyTerms, allowQueuebuster, restaurant, electronics, grocery, spaAndSalon, retail, others, billingPOS, inventoryManagement, businessReports, centralDashboard, thirdPartyIntegration, centralizedReporting, phoneCall, radioOptionEmail, whatsapp } = content.contactSales;
  const { fullName, phoneNumberLabel, emailAddress, businessNameLabel, selectBusinessType, numberofStores, selectRequiredSolutions, bestMediumToConnect } = content.formLabels
  const { commonRequestFREEDemo } = content

  const [bType, setBType] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState(91);
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState('');
  const [businessName, setBusinessName] = useState("");
  const [stores, setStores] = useState("");
  const [features, setFeatures] = useState([]);
  const [medium, setMedium] = useState("phone");
  const [isChecked, setIsChecked] = useState(false);
  const [userVerified, setUserVerified] = useState(false);

  const { businessType, setBusinessType } = useBusinessContext();

  const [errors, setErrors] = useState({
    name: "",
    mobileNo: "",
    email: "",
    businessName: "",
    stores: "",
    features: "",
    medium: ""
  });

  const router = useRouter();
  const getRegisteredNumber = localStorage.getItem("registeredNo")

  useEffect(() => {
    if (mobileNo > 0) {
      setErrors({ ...errors, mobileNo: "" });
    }
  }, [mobileNo]);

  useEffect(() => {
    setBType(businessType);
  })

  useEffect(() => {
    setMobileNo(getRegisteredNumber)
  }, [getRegisteredNumber])

  useEffect(() => {
    verified && setUserVerified(true)
  }, [verified])

  const apiCall = () => {
    const storedSource = localStorage.getItem("sources");
    const phoneDetails = localStorage.getItem("registeredNo");
    const phoneNumber = JSON.parse(phoneDetails)

    var EMAIL_VALIDATION_REGEX =
      /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    var NAME_VALIDATION_REGEX = /^[A-Za-z\s]+$/
    if (!name) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    } else if (!NAME_VALIDATION_REGEX.test(name)) {
      setErrors({ ...errors, name: "Please enter a valid name" });
      return false;
    } else if (!email) {
      setErrors({ ...errors, email: "Email is required" });
      return false;
    } else if (email.match(EMAIL_VALIDATION_REGEX) == null) {
      setErrors({ ...errors, email: "Please enter a vaild email" });
      return false;
    } else if (!businessName) {
      setErrors({ ...errors, businessName: "Please enter your buisness name" });
      return false;
    } else if (!stores) {
      setErrors({ ...errors, stores: "Please select number of stores" });
      return false;
    } else if (features.length <= 0) {
      console.log('FEATURE ERROR');
      setErrors({ ...errors, features: "Please select atleast one feature" });
      return false;
    } else if (!medium) {
      setErrors({ ...errors, medium: "Please select a medium" });
      return false;
    } else if (!isChecked) {
      toast.error("Please agree to the privacy terms to proceed.");
      return;
    } else if (name && mobileNo && email && businessName && stores && features.length && medium) {
      const redirectFrom = localStorage.getItem('redirectedFrom');
      let data = {
        countryCode: phoneNumber?.code,
        phone: phoneNumber?.phoneNo,
        name: name,
        // country: country,
        email: email,
        businessName: businessName,
        businessType: bType,
        stores: stores,
        interestedIn: features.toString(),
        medium: medium,
        message: redirectFrom && `page is redirected from ${redirectFrom}`,
        source: storedSource ? JSON.parse(storedSource) : "Enterprise Sales",
        feature: "Enterprise"
      }
      toast.promise(enterpriseFormApi(data, router), {
        loading: "Loading...",
        success: (data) => {
          localStorage.removeItem('redirectedFrom');
          localStorage.removeItem("sources")
          localStorage.removeItem("registeredNo")
          return `${data}`;
        },
        error: (data) => {
          return `${data}`;
        },
      });
    }
  };


  let Busineeses = [
    {
      type: `${restaurant}`,
      value: "restaurant",
    },
    {
      type: `${spaAndSalon}`,
      value: "spaAndSalon",
    },
    {
      type: `${grocery}`,
      value: "grocery",
    },
    {
      type: `${electronics}`,
      value: "electronics",
    },
    {
      type: `${retail}`,
      value: "retail",
    },
    {
      type: `${others}`,
      value: "others",
    },
  ];

  const intrestedInFeatures = [
    {
      name: `${billingPOS}`,
      value: "billing/pos",
    },
    {
      name: `${inventoryManagement}`,
      value: "inventoryManagement",
    },
    {
      name: `${businessReports}`,
      value: "buisnessReports",
    },
    {
      name: `${centralDashboard}`,
      value: "centralDashboard",
    },
    {
      name: `${thirdPartyIntegration}`,
      value: "integrationWithThirdParty",
    },
    {
      name: `${centralizedReporting}`,
      value: "centralizedReporting",
    },
  ];

  const noOfStores = [
    {
      name: '1 - 5',
      value: 'one-five',
    },
    {
      name: '6 - 10',
      value: 'six-ten'
    },
    {
      name: 'more than 10',
      value: 'moreThanTen'
    },
  ]

  const selectedFeatures = (featureName) => {
    if (features.includes(featureName)) {
      const newArr = features.filter((ele) => ele != featureName)
      setFeatures(newArr)
    } else {
      setFeatures([...features, featureName]);
      setErrors({ ...errors, features: '' })
    }
  }

  const Testimonials = [
    {
      img: "/assets/Brands/heineken.webp",
      name: "Chima Uba",
      designation: "QSR Head",
      description: desc1,
      company: "Heineken, Nigeria",
    },
    {
      img: "/assets/Brands/rareplanet.webp",
      name: "Ranodeep Saha",
      designation: "Co-Founder",
      description: desc3,
      company: "Rare Planet",
    },
    {
      img: "/assets/Brands/happilo.webp",
      name: "Vikas D Nahar",
      designation: "Founder and CEO",
      description: desc2,
      company: "Happilo",
    },
  ];

  return (
    <>
      {
        userVerified ?
          <div className={styles.query_form_container}>
            <h1 className={`${usedIn === 'enterprise page' ? styles.normal_form_heading : styles.mobile_form_heading}`}>
              {contactOurSalesTeam}
            </h1>
            <p style={{ textAlign: usedIn === 'enterprise page' && 'center' }} className={styles.mobile_form_para}>
              {completeTheForm}
              <br />
              {OurProductExperts}
            </p>

            <div className={styles.mobile_query_form}>
              <div style={{ width: "100%" }} className={styles.mobile_field_input}>
                <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label={fullName}
                  feedback={errors.name ? errors.name : ""}
                  onChange={(e) => (
                    setName(e.target.value), setErrors({ ...errors, name: "" })
                  )}
                  value={name}
                  placeholder={"Enter your full name"}
                  req={true}
                  styles={{ width: "100%" }}
                />
              </div>

              <div className={styles.mobile_field_input}>
                <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label={emailAddress}
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                  value={email}
                  feedback={errors.email ? errors.email : ""}
                  req={true}
                  styles={{
                    width: "100%",
                    labelSize: "2rem",
                    fontSize: "1.606rem",
                  }}
                />
              </div>
              <div className={styles.mobile_field_input}>
                <TextInput
                  className={inter_Medium.className}
                  type="text"
                  label={`${businessNameLabel}`}
                  req={true}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    setErrors({ ...errors, businessName: "" });
                  }}
                  value={businessName}
                  feedback={errors.businessName ? errors.businessName : ""}
                  placeholder="Enter Your Business Name"
                  styles={{
                    width: "100%",
                    labelSize: "2rem",
                    fontSize: "1.606rem",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <DropDownInput
                  styles={{
                    height: "5.1rem",
                    borderRadius: "0.4rem",
                    font: "normal normal normal 1.8rem/3rem Inter",
                    padding: "0 0 0 0.5rem",
                    color: "#5A5A5A",
                    fontWeight: "300",
                    border: "1px solid #ced4da",
                    width: "100%",
                    labelMargin: '1.46rem'
                  }}
                  req={true}
                  placeHolderStyles={true}
                  label={`Select Business Type`}
                  placeholder="Select Business Type"
                  options={Busineeses.map((item) => {
                    return { value: item.value, label: item.type };
                  })}
                  onChange={(e) => (
                    setBType(e?.value), setBusinessType(e?.value)
                  )}
                />
                {errors?.stores && <p style={{ fontSize: "1.8rem", color: "#dc3545", marginTop: '0px' }}>{errors.stores}</p>}
              </div>
              <div className={styles.mobile_field_input}>
                <DropDownInput
                  styles={{
                    height: "5.1rem",
                    borderRadius: "0.73rem",
                    font: "normal normal normal 1.6rem/2.2rem Inter",
                    padding: "0 0 0 0.5rem",
                    color: "#5A5A5A",
                    fontWeight: "300",
                    border: "1px solid #ced4da",
                    width: "100%",
                    labelMargin: '1.46rem'
                  }}
                  placeHolderStyles={true}
                  label={`${numberofStores}`}
                  req={true}
                  placeholder="Select Numbers of Stores"
                  options={noOfStores.map((item) => {
                    return { value: item.value, label: item.name };
                  })}
                  onChange={(e) => (
                    setStores(e.value), setErrors({ ...errors, stores: "" })
                  )}
                />
                {errors?.stores && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '0px' }}>{errors.stores}</p>}
              </div>

              <div className={styles.mobile_field_input} style={{ marginBottom: "0" }}>
                <Label
                  style={{
                    fontSize: "2rem",
                    color: "#222222",
                    marginBottom: "1.46rem",
                  }}
                >
                  {selectRequiredSolutions}
                  <span style={{ color: "#ff0000", position: "relative", bottom: "0.5rem", left: "0.5rem" }}>
                    *
                  </span>
                </Label>
                <div>
                  {intrestedInFeatures?.map((ele) => {
                    return (
                      <FormGroup key={ele?.value} check className={styles.checkbox_container}>
                        <Input id={ele?.value} type="checkbox" checked={features.includes(ele?.name)} className={styles.checkbox_input} onClick={() => selectedFeatures(ele?.name)} />
                        <Label htmlFor={ele?.value} check className={styles.checkbox_label} onClick={() => selectedFeatures(ele?.name)} >
                          {" "}
                          {ele?.name}{" "}
                        </Label>
                      </FormGroup>
                    );
                  })}
                </div>
                {errors?.features && <p style={{ fontSize: "11px", color: "#dc3545", marginTop: '0px' }}>{errors?.features}</p>}
              </div>

              <div className={styles.mobile_field_input}>
                <Label
                  style={{
                    fontSize: "2rem",
                    color: "#222222",
                    marginBottom: "1.46rem",
                  }}
                >
                  {bestMediumToConnect}
                  <span style={{ color: "#ff0000", position: "relative", bottom: "0.5rem", left: "0.5rem" }}>
                    *
                  </span>
                </Label>
                <div className={styles.medium_container}>
                  <div onClick={(e) => setMedium('phone')} >
                    <input id="phone" type="radio" value="phone" name="phone" checked={medium === 'phone'} onClick={(e) => setMedium(e.target.value)} />
                    <label htmlFor="phone">{phoneCall}</label>
                  </div>
                  <div onClick={(e) => setMedium('email')} >
                    <input id="email" type="radio" value="email" name="email" checked={medium === 'email'} onClick={(e) => setMedium(e.target.value)} />
                    <label htmlFor="email">{radioOptionEmail}</label>
                  </div>
                  <div onClick={(e) => setMedium('whatsapp')} >
                    <input id="whatsapp" type="radio" value="whatsapp" name="whatsapp" checked={medium === 'whatsapp'} onClick={(e) => setMedium(e.target.value)} />
                    <label htmlFor="whatsapp">{whatsapp}</label>
                  </div>
                </div>
              </div>
              <div className={styles.mobile_field_input}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    {iAgree} <Link href='/privacy' style={{ color: '#2a6ab4', textDecoration: 'underline', textUnderlineOffset: '2px' }}>{privacyTerms} </Link> {allowQueuebuster}
                  </Label>
                </FormGroup>
              </div>
            </div>
            <div style={{ textAlign: 'center' }} className={styles.mobile_field_input} >
              <CustomButton
                text={commonRequestFREEDemo}
                styles={{
                  backgroundColor: "#2A6AB4",
                  height: "4.5rem",
                  width: "95%",
                  margin: usedIn === 'enterprise page' ? '0' : '3.5rem 0',
                  border: `solid #2A6AB4`,
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: "1.6rem",
                }}
                onClick={() => apiCall()}
              />
            </div>
          </div>
          :
          <VerificationForm setUserVerified={setUserVerified} mobileView={true} btnText={"Request a Call Back"} />
      }

      <div style={usedIn === 'enterprise page' ? { display: 'none' } : { display: 'block', marginTop: '5rem' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={`${inter_Bold.className}`}
            style={{ fontSize: "2.5rem", textAlign: "center" }}
          >
            {homePageOurClientTitle}
          </div>
          <div
            style={{
              backgroundColor: "#F9D878",
              padding: "0.5rem",
              textAlign: "center",
              borderRadius: "5px",
              marginTop: "1.6rem",
              // marginBottom: "2.5rem",
              color: "#020D48",
              width: "30rem",
            }}
          >
            {homePageOurClientDes}
          </div>
        </div>
        <div style={{ backgroundColor: "#FFF" }}>
          <MarqueeComponent ClientsArr={ClientsArr1} margin={"3rem 0 0 0"} header={false} paraStyle={{ display: "none" }} />
          <MarqueeComponent
            ClientsArr={ClientsArr2}
            direction={"left"}
            paraStyle={{ display: "none" }}
          />
        </div>
      </div>

    </>
  )
}

export default MobileQueryForm
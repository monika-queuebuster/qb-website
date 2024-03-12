import React, { useEffect, useState } from "react";
import styles from "@/styles/QueryForm/queryForm.module.css";
import styles2 from "@/styles/qbStrap.module.css";
import {
    inter_Bold,
    inter_Medium,
    inter_Regular,
} from "@/components/common/Fonts";
import {
    ComponentHeader,
    CustomButton,
    DropDownInput,
    MarqueeComponentHomePage,
    Testmonial,
    TextInput,
} from "../qbStrap";
import { CountryCodeSelect } from "../phoneNoDropdown/phoneDropdown";
import { FormGroup, Input, Label } from "reactstrap";
import content from "../../language/ENGLISH.json";
import OurRecommendedHardware from "../homePage/OurRecommendedHardware";
import { OurPartners } from "../homePage/OurPartners";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { enterpriseFormApi } from "@/services/signUpServices";
import { useBusinessContext } from "@/services/BuisnessTypeContext";
import Link from "next/link";
import { ClientsArr1, ClientsArr2, testimonialData, videoTestimonial } from "@/constants/common";
import VerificationForm from "../common/VerificationForm";
import TestimonialSection from "../common/TestimonialSection";

const DesktopQueryForm = ({ usedIn, verified }) => {
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
    const { contactOurSalesTeam, completeTheForm, OurProductExperts, iAgree, privacyTerms, allowQueuebuster, restaurant, electronics, grocery, spaAndSalon, retail, others, billingPOS, inventoryManagement, businessReports, centralDashboard, thirdPartyIntegration, centralizedReporting, phoneCall, radioOptionEmail, whatsapp } = content.contactSales;
    const { fullName, phoneNumberLabel, emailAddress, businessNameLabel, selectBusinessType, numberofStores, selectRequiredSolutions, bestMediumToConnect } = content.formLabels
    const { commonRequestFREEDemo } = content
    const [errors, setErrors] = useState({
        name: "",
        mobileNo: "",
        email: "",
        businessName: "",
        stores: "",
        features: "",
        medium: ""
    });
    const getRegisteredNumber = localStorage.getItem("registeredNo")

    const router = useRouter();

    useEffect(() => {
        if (mobileNo > 0) {
            setErrors({ ...errors, mobileNo: "" });
        }
    }, [mobileNo]);

    useEffect(() => {
        setBType(businessType);
    }, [])

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
                    localStorage.removeItem("pricingPlan");
                    localStorage.removeItem("registeredNo")
                    return `${data}`;
                },
                error: (data) => {
                    return `${data}`;
                },
            });
        }
        return false;
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

    const { homePageOurClientTitle, homePageOurClientDes, commonOurPartners, homePageOurPartnerdesc } = content;

    return (
        <>
            {
                userVerified ?
                    <div className={styles.query_form_container}>
                        <h1 className={`${usedIn === 'enterprise page' ? styles.normal_form_heading : styles.form_heading}`}>
                            {contactOurSalesTeam}
                        </h1>
                        <p className={styles.form_para}>
                            {completeTheForm}
                            <br />
                            {OurProductExperts}
                        </p>
                        <div className={styles.query_form}>
                            <div className={styles.double_input}>
                                <div style={{ width: usedIn === "enterprise page" ? "40%" : "90%" }}>
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
                                {
                                    usedIn === "enterprise page"
                                        ?
                                        <div style={{ width: "40%" }}>
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
                                                    labelSize: "1.8rem",
                                                    fontSize: "1.8rem",
                                                }}
                                            />
                                        </div>
                                        :
                                        null
                                }

                            </div>

                            {
                                usedIn === "enterprise page" ?
                                    <div className={styles.single_input}>
                                        <div style={{ width: "100%" }}>
                                            <TextInput
                                                req={true}
                                                className={inter_Medium.className}
                                                type="text"
                                                label={`${businessNameLabel}`}
                                                onChange={(e) => {
                                                    setBusinessName(e.target.value);
                                                    setErrors({ ...errors, businessName: "" });
                                                }}
                                                value={businessName}
                                                feedback={errors.businessName ? errors.businessName : ""}
                                                placeholder="Enter Your Business Name"
                                                styles={{
                                                    width: "100%",
                                                    labelSize: "1.8rem",
                                                    fontSize: "1.8rem",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    :
                                    <div className={styles.double_input}>
                                        <div style={{ width: "40%" }}>
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
                                                    labelSize: "1.8rem",
                                                    fontSize: "1.8rem",
                                                }}
                                            />
                                        </div>
                                        <div style={{ width: "40%" }}>
                                            <TextInput
                                                req={true}
                                                className={inter_Medium.className}
                                                type="text"
                                                label={`${businessNameLabel}`}
                                                onChange={(e) => {
                                                    setBusinessName(e.target.value);
                                                    setErrors({ ...errors, businessName: "" });
                                                }}
                                                value={businessName}
                                                feedback={errors.businessName ? errors.businessName : ""}
                                                placeholder="Enter Your Business Name"
                                                styles={{
                                                    width: "100%",
                                                    labelSize: "1.8rem",
                                                    fontSize: "1.8rem",
                                                }}
                                            />
                                        </div>
                                    </div>
                            }


                            <div className={styles.double_input}>
                                <div style={{ width: "40%" }}>
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
                                <div style={{ width: "40%" }}>
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
                                        label={`${numberofStores}`}
                                        placeholder="Select Numbers of Stores"
                                        options={noOfStores.map((item) => {
                                            return { value: item.value, label: item.name };
                                        })}
                                        onChange={(e) => (
                                            setStores(e.value), setErrors({ ...errors, stores: "" })
                                        )}
                                    />
                                    {errors?.stores && <p style={{ fontSize: "1.8rem", color: "#dc3545", marginTop: '0px' }}>{errors.stores}</p>}
                                </div>
                            </div>

                            <div className={styles.single_input} style={{ marginBottom: "0" }}>
                                <Label
                                    style={{
                                        fontSize: "1.8rem",
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
                                            <FormGroup key={ele?.value} check inline className={styles.checkbox_container}>
                                                <Input id={ele?.value} type="checkbox" className={styles.checkbox_input} onClick={() => selectedFeatures(ele?.name)} />
                                                <Label htmlFor={ele?.value} check className={styles.checkbox_label}>
                                                    {" "}
                                                    {ele?.name}{" "}
                                                </Label>
                                            </FormGroup>
                                        );
                                    })}
                                </div>
                                {errors?.features && <p style={{ fontSize: "1.8rem", color: "#dc3545", marginTop: '0px' }}>{errors?.features}</p>}
                            </div>

                            <div className={styles.single_input}>
                                <Label
                                    style={{
                                        fontSize: "1.8rem",
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
                                    <div>
                                        <input id="phone" type="radio" value="phone" name="medium" checked={medium === 'phone'} onClick={(e) => setMedium(e.target.value)} />
                                        <label htmlFor="phone">{phoneCall}</label>
                                    </div>
                                    <div>
                                        <input id="email" type="radio" value="email" name="medium" checked={medium === 'email'} onClick={(e) => setMedium(e.target.value)} />
                                        <label htmlFor="email">{radioOptionEmail}</label>
                                    </div>
                                    <div>
                                        <input id="whatsapp" type="radio" value="whatsapp" name="medium" checked={medium === 'whatsapp'} onClick={(e) => setMedium(e.target.value)} />
                                        <label htmlFor="whatsapp">{whatsapp}</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.single_input}>
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
                            <div className={styles.single_input}>
                                <CustomButton
                                    text={commonRequestFREEDemo}
                                    styles={{
                                        backgroundColor: "#2A6AB4",
                                        height: "4.5rem",
                                        width: "100%",
                                        // margin: "3.5rem 0",
                                        margin: usedIn === 'enterprise page' ? '0' : '3rem 0',
                                        border: `solid #2A6AB4`,
                                        color: "#FFFFFF",
                                        fontWeight: "600",
                                        fontSize: "1.8rem",
                                    }}
                                    onClick={() => apiCall()}
                                />
                            </div>
                        </div>
                    </div>
                    : <VerificationForm setUserVerified={setUserVerified} btnText={"Request a Call Back"} />
            }

            <div style={usedIn === 'enterprise page' ? { display: 'none' } : { display: 'block', backgroundColor: '#FFF', padding: '0.1rem 0 10rem 0' }}>
                <ComponentHeader
                    title={homePageOurClientTitle}
                    barText={homePageOurClientDes}
                    barBg_Color={"#F9D878"}
                    desStyle={{ width: "30rem" }}
                />
                <div className={styles.marqueeContainerHomePage}>
                    <MarqueeComponentHomePage ClientsArr={ClientsArr1} style={{ backgroundColor: '#FFF' }} />
                </div>
                <div className={styles.marqueeContainerHomePage}>
                    <MarqueeComponentHomePage direction={"left"} ClientsArr={ClientsArr2} style={{ backgroundColor: '#FFF' }} />
                </div>
            </div>
        </>

    );
};

export default DesktopQueryForm;

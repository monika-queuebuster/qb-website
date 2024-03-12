import React, { useEffect, useState } from 'react'
import styles from '../../styles/planCheckout/DesktopPlanCheckout.module.css'
import { BlueCustomButton, DropDownInput, TextInput } from '../qbStrap'
import { Label } from 'reactstrap'
import { CountryCodeSelect } from '../phoneNoDropdown/phoneDropdown'
import { SelectDrop } from '../getFreeDemoNewCont/SelectDrop'
import { useRouter } from 'next/router'
import { pricingCheckoutPlan } from '@/services/signUpServices'
import { toast } from 'sonner'

const DesktopPlanCheckout = ({planSelected}) => {
    const [cityOptions, setCityOptions] = useState([]);
    const [city, setCity] = useState(null);
    const [fullname, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("India");
    const [phoneCode, setPhoneCode] = useState(91);
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [stores, setStores] = useState("");
    const [contact, setContact] = useState("");
    const [hardware, setHardware] = useState(false);
    const [subscriptionType, setSubscriptionType] = useState("yearly");
    const [totalAmount, setTotalAmount] = useState("11798");

    const [errors, setErrors] = useState({
        fullNameError: "",
        phoneNumberError: "",
        emailError: "",
    });

    const router = useRouter();
    const billing = planSelected
    console.log("---plan---", billing);

    useEffect(() => {
        if (billing === "monthly") {
            setSubscriptionType("monthly");
            setTotalAmount("1178.82");
        }
    }, [billing])

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

    const needHardware = [
        {
            name: "Yes",
            value: "yes"
        },
        {
            name: "No",
            value: "no"
        },
    ]

    const contactOptions = [
        {
            name: "Email",
            value: "email",
        },
        {
            name: "Whatsapp",
            value: "whatsapp",
        }, {
            name: "Phone",
            value: "phone",
        }
    ]

    const getCityData = async (characterEntered) => {
        let country = "INDIA";
        let city = characterEntered;
        try {
            let response = await fetch(
                "https://api.queuebuster.co/API/public/v2/merchant/findCityAll",
                {
                    method: "POST",
                    headers: {
                        Accept: "application.json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ city, country }),
                }
            );

            const data = await response.json();
            let cities = data?.cities ? data?.cities : [];
            cities =
                cities &&
                cities.map((el) => {
                    el.label = el.city;
                    el.value = el.city;
                    return el;
                });
            setCityOptions(cities);
        } catch (e) {
            console.log(e);
        }
    };

    const requestCallback = () => {
        const storedSource = localStorage.getItem("sources");
        if (!fullname) {
            setErrors({ ...errors, fullNameError: "Name is required" });
            return false;
        } else if (!email) {
            setErrors({ ...errors, emailError: "Email is required" });
            return false;
        } else if (fullname && email && !errors?.phoneNumberError) {
            let data = {
                countryCode: phoneCode,
                phone: phoneNumber,
                name: fullname,
                email: email,
                city: city?.value,
                businessName: businessName,
                stores: stores,
                medium: contact,
                needHardware: hardware,
                subscriptionType: subscriptionType,
                amount: totalAmount,
                source: storedSource && JSON.parse(storedSource)
            };
            toast.promise(pricingCheckoutPlan(data, router), {
                loading: "Loading...",
                success: (data) => {
                    localStorage.removeItem("pricingPlan");
                    localStorage.removeItem("sources")
                    return `${data}`;
                },
                error: (data) => {
                    return `${data}`;
                },
            });
        }
    }

    return (
        <div className={styles.pricing_page_container}>
            <div className={styles.form_section}>
                <h1 className={styles.form_heading}>Some Business Details, And <span className={styles.blue_text}>We’ll Call You Back!</span></h1>
                <p className={styles.form_desc}>Please fill mandatory details and wait for our product expert to call you back shortly.</p>
                <div className={styles.form_container}>
                    <div className={styles.form_row}>
                        <div style={{ marginBottom: '2.5rem', width: "50%" }}>
                            <TextInput
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
                        <div style={{ width: "50%" }}>
                            <TextInput
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
                    </div>
                    <div className={styles.form_row}>
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
                        <div style={{ marginBottom: '2.5rem', width: "50%" }}>
                            <TextInput
                                type="text"
                                label={"Business/Store Name"}
                                onChange={(e) => (
                                    setBusinessName(e.target.value)
                                )}
                                value={businessName}
                                placeholder={'Enter your business name'}
                                styles={{ labelSize: "1.7rem", width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className={styles.form_row}>
                        <div style={{ width: "50%" }}>
                            <DropDownInput
                                styles={{
                                    height: "5.1rem",
                                    // borderRadius: "0.73rem",
                                    font: "normal normal normal 1.8rem/3rem Inter",
                                    padding: "0 0 0 0.5rem",
                                    color: "#5A5A5A",
                                    fontWeight: "300",
                                    border: "1px solid #ced4da",
                                    width: "100%",
                                    labelMargin: '1.46rem',

                                }}
                                placeHolderStyles={true}
                                label={`No of Stores`}
                                placeholder="Select Numbers of Stores"
                                options={noOfStores.map((item) => {
                                    return { value: item.value, label: item.name };
                                })}
                                onChange={(e) => (
                                    setStores(e.value)
                                )}
                            />
                        </div>
                        <div style={{ margin: "0 0 2.92rem 0", width: "50%" }}>
                            <Label
                                style={{
                                    fontSize: "2rem",
                                    color: "black",
                                    marginBottom: "1.46rem",
                                }}
                            >

                                City
                            </Label>
                            <SelectDrop
                                name="addCity"
                                classes="no-sep-select"
                                value={city}
                                options={cityOptions}
                                noOptionsMessage={"Please enter the city name"}
                                placeholder={"dsjvdfjavdfjqgd"}
                                onChange={(value) => {
                                    // setErrors({ ...errors, cityError: false });
                                    setCity(value);
                                    console.log("---city value---", value?.value);
                                }}
                                onInputChange={(characterEntered) => {
                                    getCityData(characterEntered);
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.form_row}>
                        <div style={{ width: "50%" }}>
                            <DropDownInput
                                styles={{
                                    height: "5.1rem",
                                    // borderRadius: "0.73rem",
                                    font: "normal normal normal 1.8rem/3rem Inter",
                                    padding: "0 0 0 0.5rem",
                                    color: "#5A5A5A",
                                    fontWeight: "300",
                                    border: "1px solid #ced4da",
                                    width: "100%",
                                    labelMargin: '1.46rem'
                                }}
                                placeHolderStyles={true}
                                label={`Do you also need hardware ?`}
                                placeholder="Select your answer"
                                options={needHardware.map((item) => {
                                    return { value: item.value, label: item.name };
                                })}
                                onChange={(e) => (
                                    setHardware(e.value)
                                )}
                            />
                        </div>
                        <div style={{ width: "50%" }}>
                            <DropDownInput
                                styles={{
                                    height: "5.1rem",
                                    // borderRadius: "0.73rem",
                                    font: "normal normal normal 1.8rem/3rem Inter",
                                    padding: "0 0 0 0.5rem",
                                    color: "#5A5A5A",
                                    fontWeight: "300",
                                    border: "1px solid #ced4da",
                                    width: "100%",
                                    labelMargin: '1.46rem'
                                }}
                                placeHolderStyles={true}
                                label={`Contact Via`}
                                placeholder="Email/Whatsapp/Phone"
                                options={contactOptions.map((item) => {
                                    return { value: item.value, label: item.name };
                                })}
                                onChange={(e) => (
                                    setContact(e.value)
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.summary_section}>
                <h2 className={styles.summary_section_heading}>Summary</h2>
                <div className={styles.pricing_type}>
                    <h3 className={styles.pricing_type_heading}>Individual</h3>
                    <p className={styles.pricing_type_desc}>Open your access to a range of exciting storefront features included in the standard package.</p>
                </div>

                <div className={styles.subscription_summary}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ font: "normal normal normal 1.6rem/3rem Inter" }}>{billing === "yearly" ? "Annual Subscription" : "Monthly Subscription"}</div>
                            <div style={{ font: "normal normal normal 1.4rem/2rem Inter", color: "#747474" }}>{billing === "yearly" ? "Billed yearly" : "Billed monthly"}</div>
                        </div>
                        <div>
                            <div style={{ textAlign: "right" }}>{billing === "yearly" ? "₹ 11,998" : "₹ 999"}</div>
                            <div style={{ font: "normal normal normal 1.4rem/2rem Inter", color: "#747474", textAlign: "right" }}>{billing === "yearly" ? "per device/year" : "per device/month"}</div>
                        </div>
                    </div>

                    {
                        billing === "yearly" &&
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
                            <div>
                                <div style={{ font: "normal normal normal 1.6rem/3rem Inter" }}>Special Offer</div>
                                <div style={{ font: "normal normal normal 1.4rem/2rem Inter", color: "#2A9F37" }}>Discount Applied</div>
                            </div>
                            <div>
                                <div style={{ textAlign: "right" }}>-₹ 1,999</div>
                            </div>
                        </div>
                    }
                </div>

                <div className={styles.total_summary}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ font: "normal normal normal 1.6rem/3rem Inter" }}>Subtotal</div>
                            <div style={{ font: "normal normal normal 1.4rem/2rem Inter", color: "#747474" }}>GST 18%</div>
                        </div>
                        <div>   
                            <div style={{ textAlign: "right" }}>{billing === "yearly" ? "₹ 9,999" : "₹ 999"}</div>
                            <div style={{ font: "normal normal normal 1.4rem/2rem Inter", color: "#747474", textAlign: "right" }}> {billing === "yearly" ? "₹ 1,799" : "₹ 179"}</div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
                        <div style={{ font: "normal normal 500 1.8rem/3rem Inter", color: "#2A6AB4" }}>Total Amount</div>
                        <div>
                            <div style={{ font: "normal normal 500 1.8rem/3rem Inter", color: "#2A6AB4", textAlign: "right" }}> {billing === "yearly" ? "₹ 11,798" : "₹ 1,178"}</div>
                        </div>
                    </div>
                </div>
                <p style={{ fontSize: "1rem", marginTop: "2rem" }}>*Don’t worry, we won’t charge you anything before the completion of your free demo.</p>

                <BlueCustomButton text="Request A Call Back" style={{ width: "100%", marginTop: "6rem" }} onClick={requestCallback} />
            </div>
        </div>
    )
}

export default DesktopPlanCheckout
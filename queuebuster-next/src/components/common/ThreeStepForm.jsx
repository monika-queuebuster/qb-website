import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/common/ThreeStepForm.module.css';
import { Label } from 'reactstrap';
import { CountryCodeSelect } from '../phoneNoDropdown/phoneDropdown';
import { BlackCustomButton, DropDownInput, TextInput } from '../qbStrap';
import { toast } from 'sonner';
import { checkOtp, getFreeDemo, sendOtp } from '@/services/signUpServices';
import { SelectDrop } from '../getFreeDemoNewCont/SelectDrop';
import { inter_Medium } from '../common/Fonts';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ThreeStepForm = ({ mobileView }) => {
    const [phoneNo, setPhoneNo] = useState("")
    const [phoneCode, setPhoneCode] = useState(91);
    const [country, setCountry] = useState("India");
    const [showOtpBox, setShowOtpBox] = useState(0);
    const [userVerified, setUserVerified] = useState(false);
    const [myOtpToken, setMyOtpToken] = useState()
    const [otp, setOtp] = useState(['', '', '', '']);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [stores, setStores] = useState("");
    const [city, setCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [otpTimer, setOtpTimer] = useState(60);
    const [disableResend, setDisableResend] = useState(true);

    const router = useRouter();

    const otpFields = Array.from({ length: 4 });
    const inputRefs = useRef(otpFields.map(() => React.createRef()));

    // errors
    const [errors, setErrors] = useState({
        phoneNoError: "",
        fullNameError: "",
        businessError: "",
        emailError: "",
    })

    useEffect(() => {
        let timer;
        if (showOtpBox && disableResend && otpTimer > 0) {
            timer = setTimeout(() => {
                setOtpTimer(otpTimer - 1)
            }, 1000)
        } else if (otpTimer === 0 && disableResend) {
            setDisableResend(false);
        }
        return () => clearTimeout(timer);
    }, [showOtpBox, disableResend, otpTimer])

    const EMAIL_VALIDATION_REGEX =
        /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

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

    // -------api calls------
    const requestDemo = () => {
        const phoneDetails = { code: phoneCode, phoneNo: phoneNo }
        if (phoneNo?.length > 10 || phoneNo?.length < 10) {
            setErrors({ ...errors, phoneNoError: "Please enter a valid mobile number" });
            return false;
        }
        else if (phoneNo) {
            const data = {
                "mobile": phoneNo,
                "isDemoRequest": 1
            }
            toast.promise(sendOtp(data, setShowOtpBox, setMyOtpToken), {
                loading: "Loading...",
                success: (data) => {
                    setDisableResend(true);
                    localStorage.setItem("enteredNo", JSON.stringify(phoneDetails));
                    return `${data}`;
                },
                error: (data) => {
                    return `${data}`;
                },
            });
        }
        return false;
    }

    // ----otp field handling function
    const handleChange = (e, index) => {
        const value = e.target.value;

        setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = value;

            return newOtp;
        });

        if (value && index < otpFields.length - 1) {
            inputRefs.current[index + 1].current.focus();
        } else if (!value && index > 0) {
            inputRefs.current[index - 1].current.focus();
        }
    };

    const verifyOtp = () => {
        const otpValue = otp.join('')
        const phoneDetails = { code: phoneCode, phoneNo: phoneNo }
        if (otpValue?.length === 4) {
            toast.promise(checkOtp({ otp: myOtpToken, userOtp: otpValue }, setUserVerified), {
                loading: "Loading...",
                success: (data) => {
                    setUserVerified(true)
                    localStorage.setItem("registeredNo", JSON.stringify(phoneDetails));
                    localStorage.removeItem("enteredNo");
                    return `${data}`;
                },
                error: (data) => {
                    return `${data}`;
                },
            });
        }
    }

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

    const demoApi = () => {
        const storedSource = localStorage.getItem("sources");
        const phoneDetails = localStorage.getItem("registeredNo");
        const phoneNumber = JSON.parse(phoneDetails)
        let url = "http://localhost:3000/thankyou-download"
        if (!fullname) {
            setErrors({ ...errors, fullNameError: "Name is required" });
            return false;
        } else if (!businessName) {
            setErrors({ ...errors, businessError: "Business Name is required" });
            return false;
        } else if (fullname && businessName && !errors?.emailError) {
            let data = {
                name: fullname,
                countryCode: phoneNumber?.code,
                phone: phoneNumber?.phoneNo,
                city: city?.value,
                email: email,
                businessName: businessName,
                stores: stores,
                source: storedSource && JSON.parse(storedSource),
                feature: "Start Billing in Just 3 Easy Steps"
            };
            toast.promise(getFreeDemo(data, router, url), {
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
    }

    const changePhoneNumber = () => {
        const storedNo = localStorage.getItem("enteredNo");
        const phone = JSON.parse(storedNo);
        setShowOtpBox(0);
        setOtpTimer(60)
        setPhoneNo(phone?.phoneNo)
    }


    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <div>
                    <h4 className={styles.heading}>Start Billing in  <br />Just 3 Easy Steps</h4>
                    <p className={styles.desc}>Ready to explore how our POS Billing software can amplify your business growth? Download India’s No.1 POS Billing Software trusted by 65,000 merchants.</p>
                </div>
                {
                    !showOtpBox && !userVerified ?
                        <div style={{ width: '100%', marginTop: "20px" }}>
                            <Label
                                style={{
                                    fontSize: "2.1rem",
                                    color: "black",
                                    marginBottom: "1.5rem"
                                }}
                            >
                                Phone Number
                                <span style={{ color: "#ff0000", position: "relative", bottom: "0.5rem", left: "0.5rem" }}>
                                    *
                                </span>
                            </Label>
                            <div style={{ display: 'flex', gap: '20px', flexDirection: mobileView ? 'column' : 'row' }}>
                                <CountryCodeSelect
                                    height={"4.6rem"}
                                    width={mobileView ? "100%" : "50%"}
                                    margin={"0"}
                                    req={true}
                                    placeHolderStyles={true}
                                    placeholder={"Mobile number"}
                                    feedback={errors.phoneNoError ? errors.phoneNoError : ""}
                                    inputStyles={{ margin: 0, fontSize: "1.65rem" }}
                                    onChange={(value) => {
                                        setCountry(value.country);
                                        setPhoneCode(value.phoneCode);
                                        setPhoneNo(value.phoneNumber);
                                    }}
                                    value={phoneNo}
                                />
                                <BlackCustomButton text='Start 30 Days Free Trial' style={{ padding: '0 2rem' }} onClick={requestDemo} />
                            </div>
                        </div>
                        :
                        showOtpBox && !userVerified ?
                            <div style={{ width: '100%', marginTop: "20px" }}>
                                <Label style={{
                                    fontSize: "2.1rem",
                                    color: "black",
                                    marginBottom: "1rem"
                                }}>Verify OTP</Label>
                                <div style={{ display: 'flex', gap: '20px', flexDirection: mobileView ? 'column' : 'row', width: mobileView ? '100%' : '80%' }}>
                                    <div style={{ display: 'flex', gap: '1.4rem', justifyContent: mobileView && 'center' }}>
                                        {otpFields.map((_, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                value={otp[index]}
                                                onChange={(e) => handleChange(e, index)}
                                                maxLength="1"
                                                ref={inputRefs.current[index]}
                                                className={styles.otp_input}
                                            />
                                        ))}
                                    </div>
                                    <BlackCustomButton text='Verify' style={{ padding: '0 2rem', width: '35%' }} onClick={verifyOtp} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", marginTop: "3rem", width: "80%" }}>
                                    <p className={styles.black_text}>
                                        {otpTimer === 0 ? `You can send the OTP again` : otpTimer < 10 ? `Resend OTP in 00:0${otpTimer}s` : `Resend OTP in 00:${otpTimer}s`} &nbsp;
                                        <span
                                            // style={!disableResend ? { color: "#2A6AB4", cursor: "pointer", } : { pointerEvents: "none", color: "grey", textDecoration: "underline" }}
                                            className={`${!disableResend ? styles.blue_text : styles.disabled_text}`}
                                            onClick={() => (setDisableResend(true), setOtpTimer(60), requestDemo())}
                                        >
                                            Resend
                                        </span>
                                    </p>
                                    <p className={styles.blue_text} onClick={changePhoneNumber}>Change phone number</p>
                                </div>
                            </div>
                            :
                            <div>
                                <div>
                                    <div style={{ marginTop: "20px" }}>
                                        <div style={{ display: "flex", gap: mobileView ? "0" : "20px", flexDirection: mobileView ? "column" : "row" }}>
                                            <div style={{ marginBottom: '1.5rem', width: mobileView ? "100%" : "50%" }}>
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
                                                    styles={{ labelSize: "1.7rem", width: "100%", height: "4.5rem" }}
                                                />
                                            </div>
                                            <div style={{ width: mobileView ? "100%" : "50%", marginBottom: mobileView ? '1.5rem' : '0' }}>
                                                <TextInput
                                                    className={inter_Medium.className}
                                                    type="text"
                                                    label={"Email Address"}
                                                    feedback={errors.emailError ? errors.emailError : ""}
                                                    onChange={(e) => (
                                                        setEmail(e.target.value),
                                                        email.match(EMAIL_VALIDATION_REGEX) ? setErrors({ ...errors, emailError: "" }) : setErrors({ ...errors, emailError: "Please enter a vaild email" })
                                                    )}
                                                    value={email}
                                                    placeholder={"Enter your email address"}
                                                    styles={{ width: "100%", height: "4.5rem", labelMarginBottom: "1.3rem" }}
                                                />
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <TextInput
                                                className={inter_Medium.className}
                                                type="text"
                                                label={"Business Name"}
                                                feedback={errors.businessError ? errors.businessError : ""}
                                                onChange={(e) => (
                                                    setBusinessName(e.target.value), setErrors({ ...errors, businessError: "" })
                                                )}
                                                req={true}
                                                value={businessName}
                                                placeholder={'Enter your business name'}
                                                styles={{ labelSize: "1.7rem", width: "100%", height: "4.5rem" }}
                                            />
                                        </div>
                                        <div style={{ display: "flex", gap: mobileView ? "0" : "3rem", flexDirection: mobileView ? "column" : "row" }}>
                                            <div style={{ width: mobileView ? "100%" : "50%" }}>
                                                <DropDownInput
                                                    styles={{
                                                        height: "4.5rem",
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
                                            <div style={{ margin: "0 0 2.92rem 0", width: mobileView ? "100%" : "50%" }}>
                                                <Label
                                                    style={{
                                                        fontSize: "2rem",
                                                        color: "black",
                                                        marginBottom: "1.2rem",
                                                    }}
                                                >

                                                    City
                                                </Label>
                                                <SelectDrop
                                                    name="addCity"
                                                    height="4.5rem"
                                                    classes="no-sep-select"
                                                    value={city}
                                                    options={cityOptions}
                                                    noOptionsMessage={"Please enter the city name"}
                                                    placeholder={"dsjvdfjavdfjqgd"}
                                                    onChange={(value) => {
                                                        // setErrors({ ...errors, cityError: false });
                                                        setCity(value);
                                                    }}
                                                    onInputChange={(characterEntered) => {
                                                        getCityData(characterEntered);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <BlackCustomButton
                                                text={"get Free Demo"}
                                                style={{ padding: "0 2rem", borderRadius: "0.3rem", width: '100%' }} onClick={demoApi} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                }
            </div>
            {
                !mobileView && <div style={{ display: "flex", alignItems: "center" }}><div className={styles.form_img}><Image src="/assets/three-step.png" alt="three step form" fill /></div></div>
            }

        </div>
    )
}

export default ThreeStepForm
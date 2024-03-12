import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/common/Verification.module.css'
import Image from 'next/image'
import { FormGroup, Input, Label } from "reactstrap";
import { CountryCodeSelect } from '../phoneNoDropdown/phoneDropdown';
import { BlackCustomButton } from '../qbStrap';
import { checkOtp, sendOtp } from '@/services/signUpServices';
import { toast } from 'sonner';

const VerificationForm = ({ setUserVerified, mobileView, btnText }) => {

    const [errors, setErrors] = useState({
        phoneNoError: ""
    })

    const [phoneNo, setPhoneNo] = useState("")
    const [phoneCode, setPhoneCode] = useState(91);
    const [country, setCountry] = useState("India");
    const [showOtpBox, setShowOtpBox] = useState(0);
    const [myOtpToken, setMyOtpToken] = useState()
    const [otp, setOtp] = useState(['', '', '', '']); // Initialize with as many empty strings as the number of OTP boxes
    const otpFields = Array.from({ length: 4 }); // Change the length based on your OTP length
    const inputRefs = useRef(otpFields.map(() => React.createRef()));

    const [otpTimer, setOtpTimer] = useState(60);
    const [disableResend, setDisableResend] = useState(true);

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

    const changePhoneNumber = () => {
        const storedNo = localStorage.getItem("enteredNo");
        const phone = JSON.parse(storedNo);
        setShowOtpBox(0);
        setOtpTimer(60)
        setPhoneNo(phone?.phoneNo)
    }

    return (
        <div className={styles.verification_form}>
            <div className={styles.section_heading}><h3>Contact Our Sales Team</h3> <div className={styles.heading_stroke} style={{ width: '15rem' }}><Image src='/assets/strokes_svg/testimonials_hl.svg' alt='industries' fill /></div></div>
            <p className={styles.form_subheading}>Please complete this form to chat, book a meeting, or call our sales team directly.<br /> Our product experts will ensure you find the right tools for your business needs.</p>

            {
                !showOtpBox ?

                    <div style={{ width: mobileView ? '100%' : '40%', marginTop: "3.75rem", flexDirection: mobileView ? 'column' : 'row' }}>
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
                        <div style={{ display: 'flex', gap: '1rem', flexDirection: mobileView ? 'column' : 'row' }}>
                            <CountryCodeSelect
                                height={"4.6rem"}
                                width={mobileView ? "100%" : "60%"}
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
                            <BlackCustomButton text={btnText ? btnText : "Request Demo"} style={{ padding: '0 2rem' }} onClick={requestDemo} />
                        </div>
                    </div>
                    :
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Label>Verify OTP</Label>
                            <div style={{ display: 'flex', gap: '1.4rem', margin: '1.5rem 0' }}>
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
                            <BlackCustomButton text='Verify' style={{ padding: '0 2rem' }} onClick={verifyOtp} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3rem", width: "100%" }}>
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
            }
        </div>
    )
}

export default VerificationForm
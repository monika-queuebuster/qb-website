import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal';
import styles from '../../styles/modals/CaseStudyModal.module.css';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { FormGroup, Input, Label } from 'reactstrap';
import { CountryCodeSelect } from '../phoneNoDropdown/phoneDropdown';
import { BlackCustomButton, BlueCustomButton, TextInput } from '../qbStrap';
import { inter_Medium } from '../common/Fonts';
import { toast } from 'sonner';
import { checkOtp, getFreeDemo, sendOtp } from '@/services/signUpServices';
import { useRouter } from 'next/router';
import { saveAs } from 'file-saver';


const Verification = ({ isOpen, closeModal, mobileView, btnText }) => {

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: '1000',
        },

    };

    const [errors, setErrors] = useState({
        phoneNoError: "",
        fullNameError: "",
        emailError: "",
        businessError: ""
    })

    const [isChecked, setIsChecked] = useState(false);
    const [phoneNo, setPhoneNo] = useState("")
    const [phoneCode, setPhoneCode] = useState(91);
    const [country, setCountry] = useState("India");
    const [showOtpBox, setShowOtpBox] = useState(0);
    const [myOtpToken, setMyOtpToken] = useState()
    const [otp, setOtp] = useState(['', '', '', '']);

    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");

    const otpFields = Array.from({ length: 4 });
    const [userVerified, setUserVerified] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const inputRefs = useRef(otpFields.map(() => React.createRef()));

    const [otpTimer, setOtpTimer] = useState(60);
    const [disableResend, setDisableResend] = useState(true);

    const router = useRouter();

    // -------for downloading pdf on from submission------
    useEffect(() => {
        if (formSubmitted) {
            const pdfPath = '/assets/casestudy-pdf/casestudy.pdf';
            fetch(pdfPath)
                .then((response) => response.blob())
                .then((pdfBlob) => {
                    saveAs(pdfBlob, 'casestudy.pdf');
                })
                .catch((error) => {
                    console.error('Error fetching or saving the PDF:', error);
                });
        }
    }, [formSubmitted]);

    // -----verifying phone number-----
    const requestDemo = () => {
        const phoneDetails = { code: phoneCode, phoneNo: phoneNo }
        if (phoneNo?.length > 10 || phoneNo?.length < 10) {
            setErrors({ ...errors, phoneNoError: "Please enter a valid mobile number" });
            return false;
        }
        else if (phoneNo && isChecked) {
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

    const downloadCaseStudy = () => {
        const phoneDetails = localStorage.getItem("registeredNo");
        const phoneNumber = JSON.parse(phoneDetails)
        const storedSource = localStorage.getItem("sources");
        if (!fullname) {
            setErrors({ ...errors, fullNameError: "Name is required" })
        } else if (!email) {
            setErrors({ ...errors, emailError: "Email is required" })
        } else if (!businessName) {
            setErrors({ ...errors, businessError: "Business Name is required" })
        } else if (fullname && email && businessName) {
            let data = {
                name: fullname,
                countryCode: phoneNumber?.code,
                phone: phoneNumber?.phoneNo,
                email: email,
                businessName: businessName,
                source: storedSource && JSON.parse(storedSource),
                feature: "casestudy form"
            }

            toast.promise(getFreeDemo(data, router), {
                loading: "Loading...",
                success: (data) => {
                    localStorage.removeItem("sources")
                    localStorage.removeItem("registeredNo")
                    setFormSubmitted(true);
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

    // timer for resending otp
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

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal_size} style={customStyles} >
            <div className={styles.modal_header}>
                <h4>Download Case Study</h4>
                {/* <p>Please complete this form to chat, book a meeting, or call our sales team directly. Our product experts will ensure you find the right tools for your business needs.</p> */}
                <button className={styles.close_btn} onClick={closeModal}><RxCross2 /></button>
            </div>
            <div>
                {
                    !showOtpBox && !userVerified ?

                        <div style={{ marginTop: "5rem" }}>
                            <Label
                                style={{
                                    fontSize: "1.8rem",
                                    color: "black",
                                    marginBottom: "1.5rem"
                                }}
                            >
                                Phone Number *
                            </Label>
                            <div style={{ display: 'flex', gap: '1rem', flexDirection: mobileView ? "column" : "row" }}>
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
                                <BlackCustomButton text={btnText} style={{ padding: '0 2rem', pointerEvents: isChecked ? 'auto' : 'none' }} onClick={requestDemo} />
                            </div>
                            <div style={{ margin: "3rem 0" }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => setIsChecked(!isChecked)}
                                        />
                                        I agree to have read all the privacy terms and allow QueueBuster for using my information for official purposes.
                                    </Label>
                                </FormGroup>
                            </div>
                        </div>
                        : showOtpBox && !userVerified ?
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5rem', justifyContent: "center" }}>
                                <Label
                                    style={{
                                        fontSize: "1.8rem",
                                        color: "black",
                                        marginBottom: "1.5rem"
                                    }}
                                >
                                    Verify OTP *
                                </Label>
                                <div style={{ display: "flex", flexDirection: mobileView ? "column" : "row", gap: "2rem", alignItems: "center", marginTop: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1.4rem' }}>
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
                                    <BlackCustomButton text='Verify' style={{ padding: '0 2rem', width: '40%' }} onClick={verifyOtp} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3rem" }}>
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
                            : userVerified &&
                            <div style={{ marginTop: "3rem" }}>
                                <div style={{ display: "flex", gap: mobileView ? "2rem" : "3rem", flexDirection: mobileView ? "column" : "row" }}>
                                    <div style={{ marginBottom: mobileView ? "0rem" : '2rem', width: mobileView ? "100%" : "50%" }}>
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
                                    <div style={{ width: mobileView ? "100%" : "50%" }}>
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
                                            styles={{ width: "100%", height: "4.5rem" }}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginTop: mobileView ? "2rem" : "0" }}>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <TextInput
                                            className={inter_Medium.className}
                                            type="text"
                                            label={"Business Name"}
                                            feedback={errors.businessError ? errors.businessError : ""}
                                            onChange={(e) => (
                                                setBusinessName(e.target.value), setErrors({ ...errors, businessError: "" })
                                            )}
                                            value={businessName}
                                            placeholder={'Enter your business name'}
                                            req={true}
                                            styles={{ labelSize: "1.7rem", width: "100%", height: "4.5rem" }}
                                        />
                                    </div>
                                </div>
                                <div style={{ margin: "3rem 0" }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => setIsChecked(!isChecked)}
                                            />
                                            I agree to have read all the privacy terms and allow QueueBuster for using my information for official purposes.
                                        </Label>
                                    </FormGroup>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <BlueCustomButton text="Download Now" style={{ padding: "0 2rem", borderRadius: "0.3rem", width: '100%' }} onClick={downloadCaseStudy} />
                                </div>
                            </div>
                }
            </div>

        </Modal>
    )
}

export default Verification
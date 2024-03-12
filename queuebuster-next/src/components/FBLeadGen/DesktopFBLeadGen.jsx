import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/modals/DemoModal.module.css';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { FormGroup, Input, Label } from 'reactstrap';
import { CountryCodeSelect } from '../phoneNoDropdown/phoneDropdown';
import { BlackCustomButton, BlueCustomButton, DropDownInput, TextInput } from '../qbStrap';
import { inter_Medium } from '../common/Fonts';
import { toast } from 'sonner';
import { checkOtp, sendOtp, getFreeDemo } from '@/services/signUpServices';
import { SelectDrop } from '../getFreeDemoNewCont/SelectDrop';
import { useRouter } from 'next/router';


const DesktopFBLeadGen = () => {

  const router = useRouter();

  const [errors, setErrors] = useState({
    phoneNoError: "",
    fullNameError: "",
    businessError: "",
    emailError: "",
  })


  const [mobileView, setmobileView] = useState(1);
  const EMAIL_VALIDATION_REGEX =
    /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;


  const setWindowDimensions = () => {
    window.innerWidth > 600 ? setmobileView(0) : setmobileView(1);
  };

  useEffect(() => {
    setWindowDimensions();
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  const [isChecked, setIsChecked] = useState(true);
  const [phoneNo, setPhoneNo] = useState("")
  const [phoneCode, setPhoneCode] = useState(91);
  const [country, setCountry] = useState("India");
  const [showOtpBox, setShowOtpBox] = useState(0);
  const [myOtpToken, setMyOtpToken] = useState()
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(60);
  const [disableResend, setDisableResend] = useState(true);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [stores, setStores] = useState("");
  const [city, setCity] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);

  const otpFields = Array.from({ length: 4 });
  const [userVerified, setUserVerified] = useState(false);
  const inputRefs = useRef(otpFields.map(() => React.createRef()));

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

  useEffect(() => {
    if (phoneNo != undefined) {
      const phoneNumber = phoneNo.toString()
      phoneNumber.length > 10 ? setErrors({ phoneNoError: "Enter a valid number" }) : setErrors({ phoneNoError: "" })
    }
  }, [phoneNo])

  useEffect(() => {
    if (email === "") {
      setErrors({ emailError: "" });
    } else {
      email.match(EMAIL_VALIDATION_REGEX) ? setErrors({ ...errors, emailError: "" }) : setErrors({ ...errors, emailError: "Please enter a vaild email" })
    }
  }, [email])

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

  const demoApi = () => {
    const phoneDetails = localStorage.getItem("registeredNo");
    const phoneNumber = JSON.parse(phoneDetails)
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
        source: "FB Web Leads",
        feature: "Book your free demo now!"
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
    <div className={styles.modal_size} style={{ padding: "4rem 9.3rem 10rem 9.3rem", height: "100vh" }} >
      <div style={{ position: 'relative', height: userVerified ? "95%" : '70%', display: 'flex', justifyContent: 'center' }}>
        <div className={styles.stack1}></div>
        <div className={styles.stack2}></div>
        <div className={styles.inner_modal_container}>
          <div>
            {
              showOtpBox && !userVerified ?
                <div className={styles.form_container}>
                  <h1 className={styles.form_heading}>Book your free demo now!</h1>
                  <p className={styles.form_desc}>Fill in your details and our team will get you started.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5rem', alignItems: "center" }}>
                    <div style={{ display: 'flex', gap: '1.4rem', flexDirection: mobileView ? 'column' : 'row', width: mobileView ? '100%' : '80%' }}>
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
                      <p className={styles.black_text} style={{ width: "fit-content", margin: "auto" }}>
                        {otpTimer === 0 ? `You can send the OTP again` : otpTimer < 10 ? `Resend OTP in 00:0${otpTimer}s` : `Resend OTP in 00:${otpTimer}s`} &nbsp;
                        <span
                          // style={!disableResend ? { color: "#2A6AB4", cursor: "pointer", } : { pointerEvents: "none", color: "grey", textDecoration: "underline" }}
                          className={`${!disableResend ? styles.blue_text : styles.disabled_text}`}
                          onClick={() => (setDisableResend(true), setOtpTimer(60), requestDemo())}
                        >
                          Resend
                        </span>
                      </p>
                      <p className={styles.blue_text} style={{ width: "fit-content", margin: "auto" }} onClick={changePhoneNumber}>Change phone number</p>
                    </div>
                  </div>
                </div>
                :
                !userVerified && !showOtpBox ?
                  <div className={styles.form_container}>
                    <h1 className={styles.form_heading}>Book your free demo now! </h1>
                    <p className={styles.form_desc}>Fill in your details and our team will get you started.</p>
                    <div style={{ marginTop: "5rem", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '1rem', flexDirection: mobileView ? 'column' : 'row', width: mobileView ? '100%' : '80%' }}>
                        <CountryCodeSelect
                          height={"4.6rem"}
                          width={mobileView ? "100%" : "65%"}
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
                        <BlackCustomButton text='Request Demo' style={{ padding: '0 2rem', pointerEvents: isChecked ? 'auto' : 'none', width: '35%' }} onClick={requestDemo} />
                      </div>
                      <div style={{ margin: "3rem 0" }}>
                        <FormGroup check>
                          <Label check style={{ fontSize: '1.3rem' }}>
                            <Input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => setIsChecked(!isChecked)}
                            />
                            By providing your phone number, you consent to our contacting you via phone, SMS, or WhatsApp.
                          </Label>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                  :
                  userVerified ?
                    <div className={styles.form_container}>
                      <h1 className={styles.form_heading}>Book your free demo now!</h1>
                      <p className={styles.form_desc}>Fill in your details and our team will get you started.</p>
                      <div style={{ marginTop: "3rem" }}>
                        <div style={{ display: "flex", gap: mobileView ? "0rem" : "3rem", flexDirection: mobileView ? "column" : "row" }}>
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
                          <div style={{ width: mobileView ? "100%" : "50%" }}>
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
                        <div style={{ marginBottom: '1.5rem', marginTop: mobileView && '1rem' }}>
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
                        <div style={{ display: "flex", gap: mobileView ? "1rem" : "3rem", flexDirection: mobileView ? "column" : "row" }}>
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
                          <BlackCustomButton text="Request Free Demo" style={{ padding: "0 2rem", borderRadius: "0.3rem", width: '100%', marginBottom: '5rem' }} onClick={demoApi} />
                        </div>
                      </div>
                    </div>
                    : null

            }
          </div>
        </div>
      </div>
      {
        !userVerified &&
        <div className={styles.modal_footer_container}>
          <div className={styles.qblogo}><Image src="/assets/logo.svg" alt="queuebuster logo" fill /></div>
          <p className={styles.text}>Trusted By 65,000+ Merchants</p>
          <div className={styles.icon_container}>
            <div className={styles.merchants_icons} style={{ height: "3rem", width: "12rem" }}><Image src="/assets/demo-relaxo.png" alt="relaxo" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "5rem", width: "12rem" }}><Image src="/assets/demo-happilo.png" alt="happilo" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "5rem", width: "12rem" }}><Image src="/assets/demo-heineken.png" alt="heineken" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "5rem", width: "15rem" }}><Image src="/assets/newClients/Client-07.webp" alt="cremica" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "5rem", width: "10rem" }}><Image src="/assets/demo-tajstats.png" alt="taj stats" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "6rem", width: "7rem" }}><Image src="/assets/demo-itc.png" alt="itc" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "5rem", width: "15rem" }}><Image src="/assets/newClients/Client-43.webp" alt="canabeans" fill /></div>
            <div className={styles.merchants_icons} style={{ height: "7rem", width: "20rem" }}><Image src="/assets/newClients/Client-01.webp" alt="hul" fill /></div>
          </div>
        </div>
      }
    </div>
  )
}

export default DesktopFBLeadGen
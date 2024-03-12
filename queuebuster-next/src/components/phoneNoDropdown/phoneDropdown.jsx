import { Component } from "react";
import { FormGroup, Input, InputGroup, FormFeedback, InputGroupAddon } from "reactstrap";
import countries from "../../language/countries.js";
import styles from "../../styles/ContactPage/countryCode.module.css";

export const TextInput1 = (props) => {
   return (
      <FormGroup
         style={{
            width: props.width !== undefined ? props.width : "100%",
            margin: props.margin !== undefined ? props.margin : 0,
         }}
      >
         <label style={{ color: "#333853", fontSize: "14px", marginBottom: "10px" }}>
            {props.label}
         </label>
         {props.defaultValue !== undefined ? (
            <Input
               key={1}
               name={props.name}
               className="input-2"
               style={{
                  border: "solid 1px #cfcfd4",
                  borderRadius: "4px",
                  boxShadow: "none",
                  height: "36px",
                  ...props.inputStyles,
               }}
               type={props.type ? props.type : "text"}
               placeholder={props.placeholder}
               onChange={props.onChange instanceof Function ? props.onChange : () => {}}
               autoComplete={props.autocomplete !== undefined ? props.autocomplete : "on"}
               onBlur={props.onBlur instanceof Function ? props.onBlur : () => {}}
               defaultValue={props.defaultValue !== undefined ? props.defaultValue : ""}
               readOnly={props.readOnly === true ? true : false}
            />
         ) : (
            <Input
               key={2}
               name={props.name}
               className="input-2"
               style={{
                  border: "solid 1px #cfcfd4",
                  boxShadow: "none",
                  borderRadius: "4px",
                  height: "36px",
                  ...props.inputStyles,
               }}
               type={props.type ? props.type : "text"}
               placeholder={props.placeholder}
               onChange={props.onChange instanceof Function ? props.onChange : () => {}}
               autoComplete={props.autocomplete !== undefined ? props.autocomplete : "on"}
               onBlur={props.onBlur instanceof Function ? props.onBlur : () => {}}
               value={props.value !== undefined ? props.value : ""}
               readOnly={props.readOnly === true ? true : false}
            />
         )}
         <FormFeedback style={{ display: props.feedback ? "block" : "none" }}>
            {props.feedback}
         </FormFeedback>
      </FormGroup>
   );
};

export class CountryCodeSelect extends Component {
   constructor(props) {
      super(props);

      let defaultCountryData = countries.find((f) =>
         f.callingCodes.includes(props.defaultCode + "")
      );
      this.state = {
         selected:
            defaultCountryData !== undefined
               ? defaultCountryData
               : {
                    name: "India",
                    topLevelDomain: [".in"],
                    alpha2Code: "IN",
                    alpha3Code: "IND",
                    callingCodes: ["91"],
                    capital: "New Delhi",
                    altSpellings: ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
                    region: "Asia",
                    subregion: "Southern Asia",
                    population: 1295210000,
                    latlng: [20, 77],
                    demonym: "Indian",
                    area: 3287590,
                    gini: 33.4,
                    timezones: ["UTC+05:30"],
                    borders: ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
                    nativeName: "भारत",
                    numericCode: "356",
                    currencies: [{ code: "INR", name: "Indian rupee", symbol: "₹" }],
                    languages: [
                       { iso639_1: "hi", iso639_2: "hin", name: "Hindi", nativeName: "हिन्दी" },
                       { iso639_1: "en", iso639_2: "eng", name: "English", nativeName: "English" },
                    ],
                    translations: {
                       de: "Indien",
                       es: "India",
                       fr: "Inde",
                       ja: "インド",
                       it: "India",
                       br: "Índia",
                       pt: "Índia",
                       nl: "India",
                       hr: "Indija",
                       fa: "هند",
                    },
                    flag: "https://flagcdn.com/in.svg",
                    regionalBlocs: [
                       {
                          acronym: "SAARC",
                          name: "South Asian Association for Regional Cooperation",
                          otherAcronyms: [],
                          otherNames: [],
                       },
                    ],
                    cioc: "IND",
                 },
      };
      this.phoneNumber = props.defaultValue;
   }

   render() {
      return (
         <FormGroup
            style={{
               width: this.props.width !== undefined ? this.props.width : "100%",
               margin: this.props.margin !== undefined ? this.props.margin : 0,
               // height: this.props.height !== undefined ? this.props.height : "48px",
            }}
         >
            <label
               style={{ color: "#333853", fontSize: "14px", marginBottom: "10px", display: "none" }}
            >
               {this.props.label}
            </label>
            <div style={{ display: "flex", position: "relative", height: "75%" }}>
               <div
                  id="countryDropdown"
                  style={{
                     backgroundColor: "white",
                     display: "flex",

                     border: this.props?.countryCodeStyles?.border
                        ? this.props.countryCodeStyles.border
                        : "1px solid rgb(207, 207, 212)",
                     borderRight: "none",
                     borderRadius: this.props?.countryCodeStyles?.borderRadius
                        ? this.props.countryCodeStyles.borderRadius
                        : "4px 0 0 4px",
                     height: this.props.height?this.props.height:"100%",
                     alignItems: "center",
                     cursor: "pointer",
                     pointerEvents: this.props.pointerEvents === false ? "none" : "all",
                     ...this.props.countryCodeStyles,
                  }}
                  onClick={() => {
                     this.toggleChild();
                  }}
               >
                  <img
                     loading={"lazy"}
                     src={this.state.selected.flag}
                     alt="phone dropdown image"
                     style={{
                        height: "20px",
                        width: "auto",
                        margin: "auto",
                        cursor: "pointer",
                        paddingLeft: "1rem",
                     }}
                  />
                  {/* <span className="system-font" style={{color: '#212b36', cursor: 'pointer', fontSize: '16px', fontWeight: 600, lineHeight: 1.38, letterSpacing: '-0.34px', visibility: 'hidden'}}>{'+' + this.state.selected.callingCodes[0]}</span>
                        <img loading={'lazy'} src={rounded} style={{margin: '0 5px', cursor: 'pointer'}} alt="Country" /> */}
               </div>
               {this.props.inputgroup ? (
                  <InputGroup>
                     <Input
                        id={this.props.inputID ? this.props.inputID : ""}
                        name={this.props.name ? this.props.name : ""}
                        className={
                           this.props.placeHolderStyles
                              ? `input-2 system-font phone-input ${styles.placeHolderGray}`
                              : "input-2 system-font phone-input"
                        }
                        style={{
                           border: this.props?.inputStyles?.border
                              ? this.props.inputStyles.border
                              : "solid 1px #cfcfd4",
                           boxShadow: this.props?.inputStyles?.boxShadow
                              ? this.props.inputStyles.boxShadow
                              : "none",
                           borderRadius: this.props?.inputStyles?.borderRadius
                              ? this.props.inputStyles.borderRadius
                              : "0",
                           ...this.props.inputStyles,
                           height: this.props.height?this.props.height:"100%",
                           pointerEvents: this.props.pointerEvents === false ? "none" : "all",
                           borderLeft: "none",
                           color: "black",
                        }}
                        type={"number"}
                        placeholder={this.props.placeholder}
                        defaultValue={this.props.defaultValue}
                        value={this.props.value}
                        onChange={(e) => {
                           this.phoneNumber = e.target.value;
                           if (this.props.onChange instanceof Function) {
                              this.props.onChange({
                                 phoneCode: parseInt(this.state.selected.callingCodes[0]),
                                 phoneNumber: this.phoneNumber,
                                 country: this.state.selected.name,
                              });
                              this.props.valuesChanged && this.props.valuesChanged(true);
                           }
                        }}
                     />
                     <InputGroupAddon
                        addonType="append"
                        style={{ border: "solid 1px #cfcfd4", borderRadius: "0 4px 4px 0" }}
                     >
                        <button type="submit" className="system-font get-startedBtn">
                           {/* <i class="fa fa-sign-in"></i>  */}
                           Get started
                        </button>
                     </InputGroupAddon>
                  </InputGroup>
               ) : (
                  <Input
                     id={this.props.inputID ? this.props.inputID : ""}
                     name={this.props.name ? this.props.name : ""}
                     className={
                        this.props.placeHolderStyles
                           ? `input-2 system-font phone-input ${styles.placeHolderGray}`
                           : "input-2 system-font phone-input"
                     }
                     // className="input-2 system-font phone-input"
                     style={{
                        border: this.props?.inputStyles?.border
                           ? this.props.inputStyles.border
                           : "solid 1px #cfcfd4",
                        boxShadow: this.props?.inputStyles?.boxShadow
                           ? this.props.inputStyles.boxShadow
                           : "none",
                        borderRadius: this.props?.inputStyles?.borderRadius
                           ? this.props.inputStyles.borderRadius
                           : "0",
                        // border: "solid 1px #cfcfd4",
                        ...this.props.inputStyles,
                        height: this.props.height?this.props.height:"100%",
                        pointerEvents: this.props.pointerEvents === false ? "none" : "all",
                        borderLeft: "none",
                        color: "black",
                     }}
                     type={"number"}
                     placeholder={this.props.placeholder}
                     defaultValue={this.props.defaultValue}
                     value={this.props.value}
                     onChange={(e) => {
                        this.phoneNumber = e.target.value;
                        if (this.props.onChange instanceof Function) {
                           this.props.onChange({
                              phoneCode: parseInt(this.state.selected.callingCodes[0]),
                              phoneNumber: this.phoneNumber,
                              country: this.state.selected.name,
                           });
                           this.props.valuesChanged && this.props.valuesChanged(true);
                        }
                     }}
                  />
               )}
               <DropDown1
                  toggleChild={(setter) => {
                     this.toggleChild = setter();
                  }}
                  changeSelected={(selected) => {
                     this.setState({ selected });
                  }}
               />
            </div>
            <FormFeedback
               style={{
                  display: this.props.feedback ? "block" : "none",
                  fontSize: "1.1rem",
                  ...this.props.feedbackStyles,
               }}
            >
               {this.props.feedback}
            </FormFeedback>
         </FormGroup>
      );
   }

   componentDidUpdate() {
      if (this.props.onChange instanceof Function)
         this.props.onChange({
            phoneCode: parseInt(this.state.selected.callingCodes[0]),
            phoneNumber: this.phoneNumber,
            country: this.state.selected.name,
         });
   }
}

class DropDown1 extends Component {
   constructor(props) {
      super(props);

      this.state = {
         show: false,
         filteredCountries: [],
      };
   }

   toggleShow = () => {
      //   if (this.state.show) document.removeEventListener("click", this.handleOutsideClick, false);
      //   else document.addEventListener("click", this.handleOutsideClick, false);

      this.setState({ filteredCountries: this.state.filteredCountries, show: !this.state.show });
   };

   countryLi = (props) => {
      return (
         <li
            className={"country-li"}
            style={{ display: "flex", padding: "10px 20px", cursor: "pointer" }}
            onClick={() => {
               console.log("fdebwfjhwbfjwvfjwfjwhfrw", this.state.show);
               props.changeSelected(props.data);
               this.toggleShow();
            }}
         >
            <img
               loading={"lazy"}
               alt="phone dropdown image"
               src={props.data.flag}
               style={{
                  height: "25px",
                  width: "40px",
                  boxShadow: "0px 0px 2px 0px #777",
                  borderRadius: "2px",
                  marginRight: "12px",
               }}
            />
            <div style={{ marginRight: "12px", color: "#242424" }}>{props.data.name}</div>
            <span style={{ color: "#7b7f82" }}>
               {props.data.callingCodes[0] !== undefined ? "+" + props.data.callingCodes[0] : ""}
            </span>
         </li>
      );
   };

   render() {
      let changeTimeID = null;
      return (
         <div
            style={{
               position: "absolute",
               top: "100%",
               height: "336px",
               width: "100%",
               overflowY: "scroll",
               zIndex: 2,
               backgroundColor: "white",
               boxShadow: "0px 3px 4px 0px #E5E5E6",
               borderRadius: "4px",
               display: this.state.show ? "block" : "none",
            }}
            ref={(node) => (this.node = node)}
         >
            <div>
               <div style={{ padding: "0 20px" }}>
                  <TextInput1
                     autocomplete={"no"}
                     onChange={(e) => {
                        let val = e.target.value.trim();
                        if (changeTimeID) clearTimeout(changeTimeID);
                        changeTimeID = setTimeout(() => {
                           if (val) {
                              let filteredCountries = countries.filter(({ name }) => {
                                 let regex = new RegExp("^" + val.toLowerCase(), "i");
                                 return regex.test(name.toLowerCase());
                              });

                              this.setState({ filteredCountries, show: this.state.show });
                           } else this.setState({ filteredCountries: [], show: this.state.show });
                        }, 100);
                     }}
                     defaultValue={""}
                     margin={"0 0 20px 0"}
                     label={""}
                     placeholder={""}
                     feedback={""}
                  />
                  <img
                     loading={"lazy"}
                     alt="phone dropdown image"
                     src={"/assets/serach_grey.svg"}
                     style={{ height: "15px", position: "absolute", top: "37px", right: "30px" }}
                  />
               </div>
            </div>
            <div>
               <ul style={{ padding: 0 }} id="filtered_country_ul">
                  {this.state.filteredCountries.map((v) => {
                     return <this.countryLi data={v} changeSelected={this.props.changeSelected} />;
                  })}
               </ul>
               <hr style={{ margin: "15px 20px 15px 20px" }} />
               <ul style={{ padding: 0 }}>
                  {countries.map((v) => {
                     return <this.countryLi data={v} changeSelected={this.props.changeSelected} />;
                  })}
               </ul>
            </div>
         </div>
      );
   }

   componentDidMount() {
      this.props.toggleChild(() => {
         return this.toggleShow;
      });
   }

   handleOutsideClick = (e) => {
      if (this.node.contains(e.target)) {
         return;
      }

      this.toggleShow();
   };
}

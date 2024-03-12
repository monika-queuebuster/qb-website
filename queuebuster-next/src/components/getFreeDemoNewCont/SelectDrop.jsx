import React from "react";
import Select from "react-select";

export const SelectDrop = (props) => {
   const styles30 = {
      control: (base) => ({
         ...base,
         minHeight: 30,
         height: props.height ? props.height : "5rem",
         borderRadius: props.borderRadius ? props.borderRadius : "0.365rem",
         border: "solid 1px #cfcfd4",
         cursor: "pointer",
         ...props.styles,
      }),
      dropdownIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      clearIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      placeholder: (base) => ({
         ...base,
         color: '#5A5A5A99',
         fontWeight: '300',
      })
   };

   const styles36 = {
      control: (base) => ({
         ...base,
         minHeight: 30,
         height: 36,
         border: "solid 1px #cfcfd4",
         cursor: "pointer",
         ...props.styles,
      }),
      dropdownIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      clearIndicator: (base) => ({
         ...base,
         paddingTop: 0,
         paddingBottom: 0,
      }),
   };

   if (props.optionLimit) {
      const resultLimit = props?.optionLimit || 50;
      let i = 0;
      return (
         <div
            style={{
               font: "normal normal normal 17px/26px Inter",
               borderRadius: "10px",
               width: "100%",
            }}
         >
            <Select
               id={props.id || ""}
               closeMenuOnSelect={true}
               isMulti={props.multi}
               name={props.name}
               options={props.options}
               noOptionsMessage={() => props.noOptionsMessage}
               // className={props.classes !== undefined ? `input-2 ${props.classes}` : "input-2 "}
               //classNamePrefix="sub"
               className={
                  (props.pointerEvents === false
                     ? "input-2 no-sep-select2 dropdown-no-pe"
                     : "input-2 no-sep-select2") + (props.classes ? ` ${props.classes}` : "")
               }
               onChange={props.onChange}
               value={props.value}
               defaultValue={props.defaultSelected}
               key={props.dkey}
               isDisabled={props.disabled}
               placeholder={props.placeholder}
               autoBlur={true}
               filterOption={({ label, value }, query) => {
                  if (typeof value == "string") {
                     return (
                        value.toUpperCase().indexOf(query.toString().toUpperCase()) >= 0 &&
                        i++ < resultLimit &&
                        i++ < resultLimit
                     );
                  } else {
                     return label.indexOf(query) >= 0 && i++ < resultLimit;
                  }
               }}
               onInputChange={() => {
                  i = 0;
               }}
               formatOptionLabel={props.CustomFormatOptionLabel}
               components={
                  props.CustomSelectOptions
                     ? { Option: props.CustomSelectOptions }
                     : props.CustomIcon
                     ? { DropdownIndicator: props.CustomIcon }
                     : null
               }
            />
         </div>
      );
   } else {
      return (
         <div
            style={{
               font: "normal normal normal 1.6rem/1.5rem Inter",
               borderRadius: "10px",
               width: "100%",
            }}
         >
            <Select
               styles={styles30}
               id={props.id || ""}
               closeMenuOnSelect={true}
               isMulti={props.multi}
               name={props.name}
               options={props.options}
               noOptionsMessage={() => props.noOptionsMessage}
               // className={props.classes !== undefined ? `input-2 ${props.classes}` : "input-2 "}
               //classNamePrefix="sub"
               className={
                  (props.pointerEvents === false
                     ? "input-2 no-sep-select2 dropdown-no-pe"
                     : "input-2 no-sep-select2") + (props.classes ? ` ${props.classes}` : "")
               }
               onChange={props.onChange}
               onInputChange={props.onInputChange}
               value={props.value}
               //value={props.options && props.options.filter(option => option.label === props.defVal)}
               defaultValue={props.defaultSelected}
               key={props.dkey}
               isDisabled={props.disabled}
               placeholder={"Select"}
               autoBlur={true}
               formatOptionLabel={props.CustomFormatOptionLabel}
               components={
                  props.CustomSelectOptions
                     ? { Option: props.CustomSelectOptions }
                     : props.CustomIcon
                     ? { DropdownIndicator: props.CustomIcon }
                     : null
               }
            />
         </div>
      );
   }
};
